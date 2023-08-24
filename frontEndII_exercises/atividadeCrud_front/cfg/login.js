const login = document.querySelector("#login");
const alertMsg = document.querySelector(".alertText");

function loginUser() {
  login.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = login.email.value;
    const password = login.password.value;

    try {
      const res = await axios.post("http://127.0.0.1:3000/login", {
        userEmail: email,
        userPass: password,
      });
      alertMsg.innerHTML = `${res.data.message}`;
      alertMsg.setAttribute("style", "color: #005C4B");
      const userID = res.data.userId
      localStorage.setItem("userID", JSON.stringify(userID));

      setTimeout(function () {
        window.location.href = "./app.html";
      }, 1500);
    } catch (err) {
      let errMsg = err.response.data.error;
      alertMsg.innerHTML = `Something went wrong!<br>${errMsg}`;
      alertMsg.setAttribute("style", "color: #ff715b");
    }
  });
}
loginUser();

function initializePasswordToggler() {
  const peekPassOne = document.querySelector("#peekPassOne");
  peekPassOne.addEventListener("click", () => {
    login.password.type =
    login.password.type === "password" ? "text" : "password";
  });
}
initializePasswordToggler()