const main = document.querySelector("main");
const header = document.querySelector("header");

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

async function userManagement() {
  userID = verifyTokenLocalStorage();
  try {
    const res = await axios.get(`https://crud-api-wkqg.onrender.com/${userID}`);
    const user = res.data;
    console.log(user);
    let headerTxt = ""
    let displayUser = "";
    let displayMessages = "";
    headerTxt = `
    <h2>Hello! Welcome to our APP</h2>
    <h3>Page under construction</h3>
    <p><strong>
        It may not work properly at some point. Att, Dev Victor Italo!
    </strong></p>
    <hr>
    `
    displayUser = `
    <div class="user">
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>userID: ${user.userid}</p>
        <h3>List of Messages</h3>
        <ul id="userMessages"></ul>
    </div>`;
    header.innerHTML = headerTxt
    main.innerHTML = displayUser;

    for (const i of user.messages) {
      console.log(i);
      displayMessages += `
        <li>
            <p>Message ID: ${i.messageId}</p>
            <p>Title: ${i.title}</p>
            <p>Message: ${i.message}</p>
        </li>
        `;
    }
    userMessages.innerHTML += displayMessages;
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
