const form = document.forms[0];
let sigInBtn = document.querySelector(".sigin-btn");
let createBtn = document.querySelector("#create-acc");
let logInBtn = document.querySelector("#log-in");
let hide = document.querySelectorAll("[data-hide='true']");
let show = document.querySelectorAll("[data-show='true']");

// sigInBtn.addEventListener("click", onSubmitHandler);

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


// function onSubmitHandler(e) {
//     let invalidElements = form.querySelectorAll(".input");
//     invalidElements.forEach(element => {
//         let inputlDisplay = getComputedStyle(element).display;
//         if (inputlDisplay == "flex") {
//             console.log("more");
//             e.preventDefault();
//         }
//         else {
//             console.log("Form was send");
//             e.preventDefault();
//         }
//     })
//     e.preventDefault();
// }

form.email.addEventListener("change", patternMail);
form.password.addEventListener("change", patternMail);

function patternMail(e) {
    const input = e.target;
    let errorMassage = input.parentElement.querySelector(".error");
    let regex = new RegExp(input.dataset.pattern);
    if (regex.test(input.value) && input.value.length > 0) {
        input.style.background = "none";
        errorMassage.style.display = "none";
    }
    else {
        input.style.background = "#ebbebe";
        errorMassage.style.display = "block";
    }
}

form.passwordConfirm.addEventListener("change", password);
function password(e) {
    const input = e.target;
    let errorMassage = input.parentElement.querySelector(".error");
    if (form.password.value == form.passwordConfirm.value) {
        input.style.background = "none";
        errorMassage.style.display = "none";
    }
    else {
        input.style.background = "#ebbebe";
        errorMassage.style.display = "block";
    }
}

function inputRequired() {
    let inputs = form.querySelectorAll("input");

    inputs.forEach(input => {
        let defaultInput = input.placeholder;
        if (input.type !== 'checkbox') {
            input.addEventListener("blur", () => {
                if (input.value.length == 0) {
                    input.style.background = "#ebbebe";
                    input.placeholder = input.dataset.required;
                }
            });
            input.addEventListener("focus", () => {
                input.style.background = "";
                input.placeholder = defaultInput;
            })
        }
    })
}

inputRequired()