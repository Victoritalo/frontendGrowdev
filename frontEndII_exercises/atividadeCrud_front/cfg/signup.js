const signUp = document.querySelector("#signUp");
const alertMsg = document.querySelector(".alertText");

function createAccount() {
  signUp.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = signUp.name.value;
    const email = signUp.email.value;
    const password = signUp.password.value;
    const confirmPass = signUp.confirmPass.value;

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
    }
  });
}


function initializePasswordToggler() {
  const peekPassOne = document.querySelector("#peekPassOne");
  const peekPassTwo = document.querySelector("#peekPassTwo");
  peekPassOne.addEventListener("click", () => {
    signUp.password.type =
    signUp.password.type === "password" ? "text" : "password";
  });
  peekPassTwo.addEventListener("click", () => {
    signUp.confirmPass.type =
    signUp.confirmPass.type === "password" ? "text" : "password";
  });
}
createAccount();
initializePasswordToggler()