const btn = document.querySelector("button");
const errors = document.querySelectorAll(".error");
const inputs = document.querySelectorAll("input");
const dangerFirstName = document.querySelector("#danger-firstname");
const dangerLastName = document.querySelector("#danger-lastname");
const dangerEmail = document.querySelector("#danger-email");
const dangerPassword = document.querySelector("#danger-password");


btn.addEventListener("click", (e) => {

    // Inputs
    const firstName = inputs[0];
    const lastName = inputs[1];
    const email = inputs[2];
    const password = inputs[3];
    
    // Warning firstName

    if (firstName.value === "" || firstName.value === null ) {
        firstName.classList.replace("form-input", "form-input-error");
        document.getElementById("danger-firstname").style.display = "inline";
        document.getElementById("error-firstname").style.display = "block";
    }

    // Warning lastName
    if (lastName.value === "" || lastName.value === null ) {
        lastName.classList.replace("form-input", "form-input-error");
        document.getElementById("danger-lastname").style.display = "inline";
        document.getElementById("error-lastname").style.display = "block";
    }

    // Warning Email
    if (email.value === "" || email.value === null) {
        email.classList.replace("form-input", "form-input-error");
        document.getElementById("danger-email").style.display = "inline";
        document.getElementById("error-email").style.display = "block";
    }

    // Warning Password
    if (password.value === "" || email.value === null) {
        password.classList.replace("form-input", "form-input-error");
        document.getElementById("danger-password").style.display = "inline";
        document.getElementById("error-password").style.display = "block";
    }
});


function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }