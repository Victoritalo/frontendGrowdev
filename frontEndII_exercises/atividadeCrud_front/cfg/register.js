const register = document.querySelector("#register");
const alertMsg = document.querySelector(".alertText");

function createAccount() {
  register.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = register.name.value;
    const email = register.email.value;
    const password = register.password.value;
    const confirmPass = register.confirmPass.value;

    try {
      const res = await axios.post("https://crud-api-wkqg.onrender.com/signup", {
        userName: name,
        userEmail: email,
        userPass: password,
        confirmPassword: confirmPass,
      });

      alertMsg.innerHTML = `${res.data.message}`;
      alertMsg.setAttribute("style", "color: #005C4B");
      setTimeout(function () {
        window.location.href = "./index.html";
      }, 1500);
    } catch (err) {
      let errMsg = err.response.data.error;
      alertMsg.innerHTML = `Something went wrong!<br>${errMsg}`;
      alertMsg.setAttribute("style", "color: #ff715b");
      console.log(err.response.status);
    }
  });
}
createAccount();

function initializePasswordToggler() {
  const peekPassOne = document.querySelector("#peekPassOne");
  const peekPassTwo = document.querySelector("#peekPassTwo");
  peekPassOne.addEventListener("click", () => {
    register.password.type =
      register.password.type === "password" ? "text" : "password";
  });
  peekPassTwo.addEventListener("click", () => {
    register.confirmPass.type =
      register.confirmPass.type === "password" ? "text" : "password";
  });
}
