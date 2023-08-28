const tbody = document.querySelector("tbody");
const header = document.querySelector("header");
const modal = document.querySelector(".modal_container");
const messageForm = document.querySelector("#messageForm");
const popUpAlert = document.querySelector(".popUpAlert");
let welcomeUser = document.querySelector("#welcomeUser");

function verifyTokenLocalStorage() {
  return JSON.parse(localStorage.getItem("userID"));
}

function getLoggedUser() {
  const userID = verifyTokenLocalStorage();
  if (!userID) {
    document.querySelector("body").remove();
    localStorage.clear();
    window.alert("Please login first!");
    window.location.href = "./index.html";
    return;
  }
}
getLoggedUser();

let currentPage = JSON.parse(localStorage.getItem("crrtPage")) || 1;

async function userManagement() {
  userID = verifyTokenLocalStorage();
  try {
    const { data } = await axios.get(
      `https://crud-api-wkqg.onrender.com/${userID}/${currentPage}`
    );
    verifyPages(data.totalPages);
    welcomeUser.innerHTML = `Hello, ${data.name}!`;
    let tr = "";
    const tbody = document.querySelector("tbody");

    for (const i in data.messages) {
      const message = data.messages[i];
      tr += `
        <tr>
          <td>${message.title}</td>
          <td>${message.message}</td>
          <td class="action">
            <button onclick="editItem(${data.messages[i].messageId})"><i class='bx bx-edit' ></i></button>
          </td>
          <td class="action">
            <button onclick="deleteItem(${data.messages[i].messageId})"><i class='bx bx-trash'></i></button>
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
      popUpAlert(`${errStatus} ${err.data.error}`);
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
  
  const submitHandler = async (event) => {
    event.preventDefault();
    messageForm.removeEventListener("submit", submitHandler);
    const title = messageForm.title.value;
    const message = messageForm.message.value;
    try {
      const res = await axios.post(`https://crud-api-wkqg.onrender.com/${userID}/message`, {
        title: title,
        message: message,
      });
      const resMsg = res.data.message;
      modal.classList.remove("active");
      popUpAlert.classList.add("successMessage");
      popUpAlert.innerHTML = `<p><i class="fa-solid fa-check"></i>${resMsg}</p>`;
      setTimeout(function () {
        popUpAlert.innerHTML = "";
        popUpAlert.classList.remove("successMessage");
      }, 1500);
      userManagement();
    } catch (err) {
      let errMsg = err.response.data.error;
      popUpAlert.classList.add("errorMessage");
      popUpAlert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
    }
    setTimeout(function () {
      popUpAlert.innerHTML = "";
      popUpAlert.classList.remove("errorMessage");
    }, 1500);

  };
  messageForm.addEventListener("submit", submitHandler);
}

function editItem(messageId) {
  messageForm.reset();
  modal.classList.add("active");

  const submitHandler =  async (event) => {
    event.preventDefault();
    messageForm.removeEventListener("submit", submitHandler);
    const title = messageForm.title.value;
    const message = messageForm.message.value;
    popUpAlert.innerHTML = "";
    try {
      const res = await axios.put(
        `https://crud-api-wkqg.onrender.com/${userID}/${messageId}`,
        {
          title: title,
          message: message,
        }
      );
      const resMsg = res.data.message;
      popUpAlert.innerHTML = `<p><i class="fa-solid fa-check"></i>${resMsg}</p>`;
      modal.classList.remove("active");
      popUpAlert.classList.add("successMessage");
      setTimeout(function () {
        popUpAlert.innerHTML = "";
        popUpAlert.classList.remove("successMessage");
      }, 1500);
      userManagement();
    } catch (err) {
      let errMsg = err.response.data.error;
      popUpAlert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
      popUpAlert.classList.add("errorMessage");
      setTimeout(function () {
        popUpAlert.innerHTML = "";
        popUpAlert.classList.remove("errorMessage");
      }, 1500);
    }
  };
  messageForm.addEventListener("submit", submitHandler);
}

async function deleteItem(messageId) {
  try {
    const res = await axios.delete(
      `https://crud-api-wkqg.onrender.com/${userID}/${messageId}`
    );
    const resMsg = res.data.message;
    popUpAlert.classList.add("successMessage");
    setTimeout(function () {
      popUpAlert.classList.remove("successMessage");
      popUpAlert.innerHTML = "";
    }, 1500);
    popUpAlert.innerHTML = `<p><i class="fa-solid fa-check"></i>${resMsg}</p>`;
    userManagement();
  } catch (err) {
    let errMsg = err.response.data.error;
    popUpAlert.classList.add("errorMessage");
    setTimeout(function () {
      popUpAlert.classList.remove("errorMessage");
      popUpAlert.innerHTML = "";
    }, 1500);
    popUpAlert.innerHTML = `<p><i class="fa-solid fa-xmark"></i>${errMsg}</p>`;
  }
}

function nextPage() {
  currentPage++;
  localStorage.setItem("crrtPage", JSON.stringify(currentPage));
  userManagement();
}

function previousPage() {
  currentPage--;
  localStorage.setItem("crrtPage", JSON.stringify(currentPage));
  userManagement();
}

function logoutUser() {
  localStorage.removeItem("userID");
  window.location.href = "../index.html";
}
document.querySelector("#closeBtn").addEventListener("click", () => {
  modal.classList.remove("active");
});
