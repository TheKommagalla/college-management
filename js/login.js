function validateEmailInput() {
  const emailInput = document.getElementById("Email").value;
  const pwdInput = document.getElementById("pwd").value;
  // const feedbackElement = document.getElementById('emailFeedback');
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;emailRegex.test(emailInput)
  if (emailInput === "csesecb26@gmail.com" && pwdInput === "admin@123") {
    //  if (emailInput.value.matches("22p61a05c1@gmail.com") && pwdInput === "admin@123") {

    location.href = "workplace.html";
  } else if (emailInput === "" && pwdInput === "") {
    alert("Please enter valid email and password");
  } else {
    //   feedbackElement.textContent = "Please enter a valid email address.";
    alert("invalid email/password");
  }
}
function validateEmailPassword() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (email === "22p61a05c1@vbithyd.ac.in" && password === "admin@123") {
    location.href = "workplace.html";
  } else if (email === "" && password === "") {
    alert("Please enter valid email and password");
  } else {
    //   feedbackElement.textContent = "Please enter a valid email address.";
    alert("invalid email/password");
  }
}
