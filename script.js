const form = document.getElementsById("form");
const firstName = document.getElementsById("firstName");
const lastName = document.getElementsById("lastName");
const email = document.getElementsById("email");
const password = document.getElementsById("password");

form.addEventLister("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    if(!isValid(emailValue)){

    } else {
        
    }
});


function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }