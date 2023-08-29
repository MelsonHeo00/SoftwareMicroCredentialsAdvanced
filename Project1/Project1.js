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

const icon2 = document.querySelector('.overlay-icon.icon2 img');

let isPaused = false;

icon2.addEventListener('click', function() {
    if (isPaused) {
        icon2.style.animationPlayState = 'running';
    } else {
        icon2.style.animationPlayState = 'paused';
    }
    isPaused = !isPaused;
});

const modalLinks = document.querySelectorAll(".modal-link");
const modals = document.querySelectorAll(".modal");
const closeButton = document.querySelectorAll(".close-button");

modalLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const modalId = link.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

closeButton.forEach(button => {
    button.addEventListener("click", function() {
        const modal = button.closest(".modal");
        modal.style.display = "none";
    });
});

window.addEventListener("click", function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
