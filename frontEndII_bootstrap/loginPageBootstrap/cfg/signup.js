const signup = document.querySelector("#signup");
const alertDanger = document.querySelector(".alert-danger");
const alertSuccess = document.querySelector(".alert-success");

function toggleLoadingButton(isLoading) {
    const submitButton = document.querySelector('#submitButton');
    const loadingSpinner = document.querySelector('#loadingSpinner');
  
    if (isLoading) {
      submitButton.disabled = true;
      loadingSpinner.style.display = 'inline-block';
    } else {
      submitButton.disabled = false;
      loadingSpinner.style.display = 'none';
    }
  }
  
  function signUp() {
    signup.addEventListener("submit",  (e) => {
      e.preventDefault();
      toggleLoadingButton(true);
  
      const email = signup.email.value;
      const name = signup.name.value;
      const password = signup.password.value;
      const confirmPassword = signup.confirmPassword.value;
  
     setTimeout(async () => {
        try {
            const res = await axios.post("http://127.0.0.1:3000/signup", {
              userEmail: email,
              userName: name,
              userPass: password,
              confirmPassword: confirmPassword
            });
      
            console.log(res.data.message);
            alertSuccess.innerHTML = res.data.message;
            alertSuccess.classList.remove("displayNone");
            setTimeout(() => {
              alertSuccess.classList.add("displayNone");
            }, 2500);
          } catch (err) {
            console.log(err);
            alertDanger.innerHTML = err.response.data.error;
            alertDanger.classList.remove("displayNone");
            setTimeout(() => {
              alertDanger.classList.add("displayNone");
            }, 3000);
          } finally {
            toggleLoadingButton(false);
          }
     }, 2000);
    });
  }
  
  signUp();
