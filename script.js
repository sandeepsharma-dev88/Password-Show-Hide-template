let password = document.getElementById("password");

let confirmPassword = document.getElementById("confirmPassword");

let toggleBtn = document.getElementById("toggleBtn");

let checkBtn = document.getElementById("checkBtn");

let message = document.getElementById("message");


// 1. Show and Hide Password

toggleBtn.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";
        toggleBtn.textContent = "🙈";
        toggleBtn.classList.add("active");

    } else {

        password.type = "password";
        toggleBtn.textContent = "👁️";
        toggleBtn.classList.remove("active");

    }

});


// 2. Check Password

checkBtn.addEventListener("click", function() {

    if (password.value === "" || confirmPassword.value === "") {

        message.textContent = "Please enter both passwords!";
        message.style.color = "orange";

    }

    else if (password.value === confirmPassword.value) {

        message.textContent = "Passwords Match!";
        message.style.color = "green";

    }

    else {

        message.textContent = "Passwords Do Not Match!";
        message.style.color = "red";

    }

});
