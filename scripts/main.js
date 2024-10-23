const form = document.forms[0];
let sigInBtn = document.querySelector(".sigin-btn");
let createBtn = document.querySelector("#create-acc");
let logInBtn = document.querySelector("#log-in");
let hide = document.querySelectorAll("[data-hide='true']");
let show = document.querySelectorAll("[data-show='true']");

sigInBtn.addEventListener("click", onSubmitHandler);

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


function onSubmitHandler(e) {
    
    
   let inputs = form.querySelectorAll(".input")
   inputs.forEach(input => {
    let a = input.querySelector("input")
    let display = getComputedStyle(input).display;
    if (a.value.length == 0) {
        a.classList.add("invalid");
        console.log(a);
    }
    console.log(input);
   })
   let invalidElements = form.querySelectorAll(".invalid");
    if (invalidElements.length > 0) {
        console.log("stop");
        e.preventDefault();
    }
    else {
        console.log("Форма отправлена");
        e.preventDefault();
    }
    e.preventDefault();
}

form.email.addEventListener("change", patternMail);
form.password.addEventListener("change", patternMail);
form.passwordConfirm.addEventListener("change", password);

function patternMail(e) {
    let input = e.target;
    let errorMassage = input.parentElement.querySelector(".error");
    let regex = new RegExp(input.dataset.pattern);
    if (regex.test(input.value) && input.value.length > 0) {
        input.classList.remove("invalid")
        errorMassage.style.display = "none";
    }
    else {
        input.classList.add("invalid")
        errorMassage.style.display = "flex";
    }
}
function password(e) {
    let input = e.target;
    let errorMassage = input.parentElement.querySelector(".error");
    if (form.password.value == form.passwordConfirm.value) {
        input.classList.remove("invalid")
        errorMassage.style.display = "none";
    }
    else {
        input.classList.add("invalid");
        errorMassage.style.display = "flex";
    }
}
// function validateElement(e) {
//     let input = e.target;
//     let errorMassage = input.parentElement.querySelector(".error");
//     let regex = new RegExp(input.dataset.pattern);
//     // if ((regex.test(input.value) && input.value.length > 0)) {
//     //     input.classList.remove("invalid")
//     //     errorMassage.style.display = "none";
//     // }
//     if (form.password.value === form.passwordConfirm.value) {
//         input.classList.remove("invalid")
//         errorMassage.style.display = "none";
//     }
//     else {
//         input.classList.add("invalid")
//         errorMassage.style.display = "flex";
//     }
// }

function inputRequired() {
    let inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
        let defaultInput = input.placeholder;
        if (input.type !== 'checkbox') {
            input.addEventListener("blur", () => {
                if (input.value.length == 0) {
                    input.classList.add("invalid")
                    input.placeholder = input.dataset.required;
                }
            });
            input.addEventListener("focus", () => {
                input.classList.remove("invalid")
                input.placeholder = defaultInput;
            })
        }
    })
}

inputRequired()












