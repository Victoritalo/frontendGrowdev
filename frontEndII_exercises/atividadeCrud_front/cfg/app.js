const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal_container");
const messageForm = document.querySelector("#messageForm");
const alert = document.querySelector(".popUpAlert");
let welcomeUser = document.querySelector("#welcomeUser");
const newMessageButton = document.querySelector("#newMessage");

newMessageButton.addEventListener("click", (e) => {
  e.preventDefault();
  showModal();
});

const userID = verifyTokenLocalStorage();
let currentPage = 1;

function verifyTokenLocalStorage() {
  return JSON.parse(localStorage.getItem("userID"));
}

function getLoggedUser() {
  if (!userID) {
    alert("Please login first!");
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 100);
    return;
  }
}

function userManagement() {
  try {
    axios.get(`http://127.0.0.1:3000/${userID}/${currentPage}`)
      .then((res) => {
        const user = res.data;
        verifyPages(user.totalPages);
        welcomeUser.innerHTML = `Hello, ${user.name}!`;
        let tr = "";

        for (const i in user.messages) {
          const message = user.messages[i];
          tr += `
            <tr>
              <td>${message.title}</td>
              <td>${message.message}</td>
              <td class="action">
                <button onclick="editItem(${i})"><i class='bx bx-edit' ></i></button>
              </td>
              <td class="action">
                <button onclick="deleteItem(${i})"><i class='bx bx-trash'></i></button>
              </td>
            </tr>
          `;
        }
        tbody.innerHTML = tr;
      })
      .catch((error) => {
        const err = error.response;
        const errStatus = err.status;
        localStorage.clear();
        setTimeout(() => {
          alert(`${errStatus} ${err.data.error}`);
          // window.location.reload();
        }, 100);
      });
  } catch (error) {
    console.error(error);
  }
}

function verifyPages(numOfPages) {
  const previousBtn = document.querySelector("#previousBtn");
  const nextBtn = document.querySelector("#nextBtn");

  if (currentPage === 1) previousBtn.disabled = true;
  else previousBtn.disabled = false;

  if (currentPage === numOfPages) nextBtn.disabled = true;
  else nextBtn.disabled = false;
}

function showModal() {
  modal.classList.add("active");
  const closeBtn = document.querySelector("#closeBtn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

function handleFormSubmission(submissionFunction) {
  messageForm.reset();
  showModal();

  messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = messageForm.title.value;
    const message = messageForm.message.value;

    try {
      await submissionFunction(title, message);
      modal.classList.remove("active");
      alert.classList.add("successMessage");
      alert.innerHTML =
        "<p><i class='fa-solid fa-check'></i>Operation successful.</p>";
      setTimeout(() => {
        alert.innerHTML = "";
        alert.classList.remove("successMessage");
        // window.location.reload();
      }, 1500);
      userManagement();
    } catch (err) {
      let errMsg = err.response?.data?.error || "An error occurred.";
      alert.classList.add("errorMessage");
      alert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
      setTimeout(() => {
        alert.innerHTML = "";
        alert.classList.remove("errorMessage");
      }, 1500);
    }
  });
}

function editItem(index) {
  handleFormSubmission(async (title, message) => {
    await axios.put(`http://127.0.0.1:3000/${userID}/${index}`, {
      title: title,
      message: message,
    });
  });
}

async function deleteItem(index) {
  try {
    await axios.delete(`http://127.0.0.1:3000/${userID}/${index}`);
    alert.classList.add("successMessage");
    setTimeout(() => {
      alert.classList.remove("successMessage");
      alert.innerHTML = "";
    }, 1500);
    alert.innerHTML =
      "<p><i class='fa-solid fa-check'></i>Item deleted successfully.</p>";
    userManagement();
  } catch (err) {
    let errMsg = err.response?.data?.error || "An error occurred.";
    alert.classList.add("errorMessage");
    setTimeout(() => {
      alert.classList.remove("errorMessage");
      alert.innerHTML = "";
    }, 1500);
    alert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
  }
}

function nextPage() {
  currentPage++;
  userManagement();
}

function previousPage() {
  currentPage--;
  userManagement();
}

function logoutUser() {
  localStorage.removeItem("userID");
  window.location.href = "../index.html";
}

getLoggedUser();
userManagement();
