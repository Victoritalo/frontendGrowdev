const login = document.querySelector("#login");
const peekPass = document.querySelector(".fa-eye");

function loginUser(){
  login.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = login.email.value;
    const password = login.password.value;
  
    try {
      const res = await axios.post("http://127.0.0.1:3000/login", {
        userEmail: email,
        userPass: password,
      });
      console.log(
        `User: ${res.data.userName}, ID: ${res.data.userId}, Email: ${res.data.userEmail}`
      );
    } catch (err) {
      const errMsg = err.response.data.error;
      const alertMsg = document.querySelector(".alertText");
      alertMsg.innerHTML = `Something went wrong! ${errMsg}`;
    }
  });
}

