const tbody = document.querySelector("tbody");
const header = document.querySelector("header");
const modal = document.querySelector(".modal_container");
const messageForm = document.querySelector("#messageForm");
const alert = document.querySelector(".popUpAlert");
let welcomeUser = document.querySelector("#welcomeUser");

function verifyTokenLocalStorage() {
  return JSON.parse(localStorage.getItem("userID"));
}

function getLoggedUser() {
  const userID = verifyTokenLocalStorage();
  if (!userID) {
    alert("Please login first!");
    localStorage.clear();
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 100);
    return;
  }
}
getLoggedUser();
let currentPage = 1;

async function userManagement() {
  userID = verifyTokenLocalStorage();
  try {
    const res = await axios.get(`https://crud-api-wkqg.onrender.com/${userID}/${currentPage}`);
    const user = res.data;
    console.log(res);
    verifyPages(user.totalPages)
    welcomeUser.innerHTML = `Hello, ${user.name}!`;
    let tr = "";
    const tbody = document.querySelector("tbody");

    for (const i in user.messages) {
      const message = user.messages[i];
      console.log(message);
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
  } catch (error) {
    const err = error.response;
    const errStatus = err.status;
    localStorage.clear();
    setTimeout(() => {
      alert(`${errStatus} ${err.data.error}`);
      window.location.reload();
    }, 100);
  }
}
userManagement();
function verifyPages(numOfPages) {
  if (currentPage === 1) previousBtn.disabled = true;
  else previousBtn.disabled = false;
  if (currentPage === numOfPages) nextBtn.disabled = true;
  else nextBtn.disabled = false;
}
function addMessage() {
  messageForm.reset();
  modal.classList.add("active");
  messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = messageForm.title.value;
    const message = messageForm.message.value;
    try {
      const res = await axios.post(`https://crud-api-wkqg.onrender.com/${userID}/message`, {
        title: title,
        message: message,
      });
      const resMsg = res.data.message;
      modal.classList.remove("active");
      alert.classList.add("successMessage");
      alert.innerHTML = `<p><i class="fa-solid fa-check"></i>${resMsg}</p>`;
      setTimeout(function () {
        alert.innerHTML = "";
        alert.classList.remove("successMessage");
        window.location.reload(); //temfix
      }, 1500);
      userManagement();
    } catch (err) {
      let errMsg = err.response.data.error;
      alert.classList.add("errorMessage");
      alert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
    }
    setTimeout(function () {
      alert.innerHTML = "";
      alert.classList.remove("errorMessage");
    }, 1500);
    console.clear();
  });
}

function editItem(index, test, test2) {
  console.log(test, test2);
  messageForm.reset();
  modal.classList.add("active");
  messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = messageForm.title.value;
    const message = messageForm.message.value;
    alert.innerHTML = "";
    try {
      const res = await axios.put(`https://crud-api-wkqg.onrender.com/${userID}/${index}`, {
        title: title,
        message: message,
      });
      const resMsg = res.data.message;
      alert.innerHTML = `<p><i class="fa-solid fa-check"></i>${resMsg}</p>`;
      modal.classList.remove("active");
      alert.classList.add("successMessage");
      setTimeout(function () {
        alert.innerHTML = "";
        alert.classList.remove("successMessage");
        window.location.reload(); //temfix
      }, 1500);
      userManagement();
    } catch (err) {
      let errMsg = err.response.data.error;
      alert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
      alert.classList.add("errorMessage");
      setTimeout(function () {
        alert.innerHTML = "";
        alert.classList.remove("errorMessage");
      }, 1500);
    }

    console.clear();
  });
}

async function deleteItem(index) {
  try {
    const res = await axios.delete(`https://crud-api-wkqg.onrender.com/${userID}/${index}`);
    const resMsg = res.data.message;
    alert.classList.add("successMessage");
    setTimeout(function () {
      alert.classList.remove("successMessage");
      alert.innerHTML = "";
    }, 1500);
    alert.innerHTML = `<p><i class="fa-solid fa-check"></i>${resMsg}</p>`;
    userManagement();
  } catch (err) {
    let errMsg = err.response.data.error;
    alert.classList.add("errorMessage");
    setTimeout(function () {
      alert.classList.remove("errorMessage");
      alert.innerHTML = "";
    }, 1500);
    alert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
  }
  // console.clear();
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
document.querySelector("#closeBtn").addEventListener("click", () => {
  modal.classList.remove("active");
});
