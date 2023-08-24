const signup = document.querySelector("#signup");
const alertDanger = document.querySelector(".alert-danger");
const alertSuccess = document.querySelector(".alert-success");

function toggleLoadingButton(isLoading) {
  const submitButton = document.querySelector("#submitButton");
  const loadingSpinner = document.querySelector("#loadingSpinner");

  if (isLoading) {
    submitButton.disabled = true;
    loadingSpinner.style.display = "inline-block";
  } else {
    submitButton.disabled = false;
    loadingSpinner.style.display = "none";
  }
}

function signUp() {
  signup.addEventListener("submit", async (e) => {
    e.preventDefault();
    toggleLoadingButton(true);

    const email = signup.email.value;
    const name = signup.name.value;
    const password = signup.password.value;
    const confirmPassword = signup.confirmPassword.value;
    try {
      const res = await axios.post(
        "https://crud-api-wkqg.onrender.com/signup",
        {
          userEmail: email,
          userName: name,
          userPass: password,
          confirmPassword: confirmPassword,
        }
      );
      alertSuccess.innerHTML = res.data.message;
      alertSuccess.classList.remove("displayNone");
      setTimeout(() => {
        alertSuccess.classList.add("displayNone");
      }, 2500);
    } catch (err) {
      alertDanger.innerHTML = err.response.data.error;
      alertDanger.classList.remove("displayNone");
      setTimeout(() => {
        alertDanger.classList.add("displayNone");
      }, 3000);
    } finally {
      toggleLoadingButton(false);
    }
  });
}

signUp();
