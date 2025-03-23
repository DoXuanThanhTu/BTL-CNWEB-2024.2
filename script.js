const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const registerContainer = document.querySelector(".register-container");
const loginContainer = document.querySelector(".login-container");

registerButton.addEventListener("click", () => {
    registerContainer.classList.remove("d-none");
    loginContainer.classList.add("d-none");
});
loginButton.addEventListener("click", () => {
    loginContainer.classList.remove("d-none");
    registerContainer.classList.add("d-none");
});
