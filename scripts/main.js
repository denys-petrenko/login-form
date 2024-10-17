let createBtn = document.querySelector("#create-acc");
let sigInBtn = document.querySelector(".sigin-btn");
let logInBtn = document.querySelector("#log-in");
let hide = document.querySelectorAll("[data-hide='true']");
let show = document.querySelectorAll("[data-show='true']");

sigInBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

createBtn.addEventListener("click", showCreateInputs);
function showCreateInputs() {
    hide.forEach(item => item.style.display = "flex");
    show.forEach(item => item.style.display = "none");
    sigInBtn.value = "Create account";
}

logInBtn.addEventListener("click", showLogIn);
function showLogIn() {
    hide.forEach(item => item.style.display = "none");
    show.forEach(item => item.style.display = "flex");
    sigInBtn.value = "Submit";
}