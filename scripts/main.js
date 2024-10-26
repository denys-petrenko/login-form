const form = document.forms[0];
let sigInBtn = document.querySelector(".sigin-btn");
let createBtn = document.querySelector("#create-acc");
let logInBtn = document.querySelector("#log-in");
let titleCreate = document.querySelector("#title-create");
let hide = document.querySelectorAll("[data-hide='true']");
let show = document.querySelectorAll("[data-show='true']");

form.addEventListener("submit", onSubmitHandler);
createBtn.addEventListener("click", showCreateInputs);
logInBtn.addEventListener("click", showLogIn);

function showCreateInputs() {
    hide.forEach(item => item.style.display = "flex");
    show.forEach(item => item.style.display = "none");
    sigInBtn.value = "Create account";
}

function showLogIn() {
    hide.forEach(item => item.style.display = "none");
    show.forEach(item => item.style.display = "flex");
    sigInBtn.value = "Submit";
}

function onSubmitHandler(e) {
    let inputs = form.querySelectorAll(".input");
    inputs.forEach(element => {
        let input = element.querySelector("input");
        let errorMassage = element.querySelector(".error");
        let display = getComputedStyle(element).display;
        if (display == "flex" && input.value == "") {
            input.classList.add("invalid");
            errorMassage.style.display = "flex";
        }
    });
    if (titleCreate.style.display == "flex" && !form.privacy.checked) {
        checkPrivacy();
    }
    let invalidElements = form.querySelectorAll(".invalid");
    if (invalidElements.length > 0 || (titleCreate.style.display == "flex" && !form.privacy.checked)) {
        e.preventDefault();
    }
    else {
        alert("The form has been submitted");
    }
}

form.text.addEventListener("change", requiredInputs);
form.email.addEventListener("change", requiredInputs);
form.password.addEventListener("change", requiredInputs);
form.passwordConfirm.addEventListener("change", confirmPassword);
form.privacy.addEventListener("change", checkPrivacy);

function requiredInputs(e) {
    let input = e.target;
    let errorMassage = input.parentElement.querySelector(".error");
    let regex = new RegExp(input.dataset.pattern);
    if (regex.test(input.value) && input.value.length > 0) {
        input.classList.remove("invalid");
        errorMassage.style.display = "none";
    }
    else {
        input.classList.add("invalid");
        errorMassage.style.display = "flex";
    }
}

function confirmPassword(e) {
    let input = e.target;
    let errorMassage = input.parentElement.querySelector(".error");
    if (form.password.value == form.passwordConfirm.value) {
        input.classList.remove("invalid");
        errorMassage.style.display = "none";
    }
    else {
        input.classList.add("invalid");
        errorMassage.style.display = "flex";
    }
}

function inputRequired() {
    let inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
        let defaultInput = input.placeholder;
        if (input.type !== 'checkbox') {
            input.addEventListener("blur", () => {
                if (input.value.length == 0) {
                    input.classList.add("invalid");
                    input.placeholder = input.dataset.required;
                }
            });
            input.addEventListener("focus", () => {
                input.classList.remove("invalid");
                input.placeholder = defaultInput;
            })
        }
    })
}

inputRequired();

function checkPrivacy() {
    let privacy = form.querySelector("#check-privacy");
    let errorMassage = privacy.querySelector(".error");
    form.privacy.checked ? errorMassage.style.display = "none" : errorMassage.style.display = "flex";
}
