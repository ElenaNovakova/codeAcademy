// Create a HTML form , with 4 inputs for FirstName,LastName,Email and Password
// Create a button, on click call a function to get all input values
// Create an object in the callback function.
// Pass the values of the form as parameters when you construct the object.
// Finally print the object
// BONUS: validate the email if it’s really an email, and the password to be at least 8 characters.


function createHtml() {
    var mainDiv = document.getElementById("main");
    var form = document.createElement("form");

    var inputFirstName = document.createElement("input");
    inputFirstName.type = "text";
    inputFirstName.placeholder = "FirstName";
    inputFirstName.id = "firstName"

    var inputLastName = document.createElement("input");
    inputLastName.type = "text";
    inputLastName.placeholder = "LastName";
    inputLastName.id = "lastName"

    var inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "email"
    inputLastName.id = "email"

    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.placeholder = "password";
    inputLastName.id = "password"

    var button = document.createElement("button");
    button.innerHTML = "button";

    button.addEventListener("click", function (e) {
        e.preventDefault();
        var User = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            pasword: inputPassword.value,

            checkPassword: function () {
                if (inputPassword.value.length < 8) {
                    alert("Vnesi pogolem pasvord");
                }
            },

            checkEmail: function () {
                if (!inputEmail.value.includes("@")) {
                    alert("vnesi tocen email")
                }
            }
        };

        User.checkEmail();
        User.checkPassword();
        console.log(User);
    });

    form.appendChild(inputFirstName);
    form.appendChild(inputLastName);
    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(button);
    mainDiv.appendChild(form);
}

createHtml();