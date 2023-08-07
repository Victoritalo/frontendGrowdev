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
      console.log(res.data)
      alertMsg.innerHTML = `${res.data.message}`;
      alertMsg.setAttribute("style", "color: #005C4B");

      const loggedUser = {
        id: res.data.userID,
        email: res.data.email,
        name: res.data.name,
        messages: res.data.messages,
      }
      
      let token = Math.random().toString(22).substring(2);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      setTimeout(function () {
        window.location.href = "./app.html";
      }, 1500);
    } catch (err) {
      let errMsg = err.response.data.error;
      alertMsg.innerHTML = `Something went wrong!<br>${errMsg}`;
      alertMsg.setAttribute("style", "color: #ff715b");
      console.log(err.response.status);
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