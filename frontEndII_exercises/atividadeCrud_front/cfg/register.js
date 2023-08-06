const register = document.querySelector("#register");
const peekPass = document.querySelector(".fa-eye");
const alertMsg = document.querySelector(".alertText");

function createAccount(){
  register.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = register.name.value;
    const email = register.email.value;
    const password = register.password.value;
  
    try {
      const res = await axios.post("http://127.0.0.1:3000/signup", {
        userName: name,
        userEmail: email,
        userPass: password,
      });
        // alertMsg.innerHTML = `${res.data.message} User: ${res.data.userName}, ID: ${res.data.userId}, Email: ${res.data.userEmail}`
      console.log(res);
    } catch (err) {
      // const errMsg = err.response.data.error;
      // alertMsg.innerHTML = `Something went wrong! ${errMsg}`;
      console.log(err.response);
    }
  });
}

function formValidations() {
  peekPass.addEventListener('click', () => {
    register.password.type = register.password.type === 'password'? 'text' : 'password';
    register.password2.type = register.password2.type === 'password'? 'text' : 'password';
  })

  
}
formValidations()