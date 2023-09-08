document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll(".input-clear-on-focus");

    inputFields.forEach(input => {
        const placeholder = input.getAttribute("placeholder");

        input.addEventListener("focus", function () {
            if (input.value === placeholder) {
                input.value = "";
            }
        });

        input.addEventListener("blur", function () {
            if (input.value === "") {
                input.value = placeholder;
            }
        });
    });

    const signUpButton = document.getElementById("signUpButton");
    const loginButton = document.getElementById("loginButton");
    const signUpContent = document.getElementById("signUpContent");
    const loginContent = document.getElementById("loginContent");

    signUpButton.addEventListener("click", function () {
        signUpButton.classList.add("active");
        loginButton.classList.remove("active");
        signUpContent.classList.add("visible");
        loginContent.classList.remove("visible");
    });

    loginButton.addEventListener("click", function () {
        loginButton.classList.add("active");
        signUpButton.classList.remove("active");
        signUpContent.classList.remove("visible");
        loginContent.classList.add("visible");
    });

    signUpContent.classList.add("visible");
    signUpButton.classList.add("active");
});
