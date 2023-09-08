// Part 1
const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.querySelector(".navbar-links");
const loginLink = document.getElementById("loginLink");

navbarToggle.addEventListener("click", function() {
    navbarLinks.classList.toggle("show-navbar");
});

loginLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    const modal = document.getElementById("loginModal");
    modal.style.display = "block";
});

const loginModal = document.getElementById("loginModal");
const loginModalClose = document.getElementById("loginModalClose");

loginModalClose.addEventListener("click", function() {
    loginModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});


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

// Part 2
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

var modalLinks = document.querySelectorAll(".modal-link1");
modalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        var modalId = this.getAttribute("data-modal-id");
        showModal(modalId);
    });
});

var closeButtons = document.querySelectorAll(".close-button2");
closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var modalId = this.closest(".modal2").id;
        hideModal(modalId);
    });
});

function redirectToConfirmation() {
    var confirmationPageUrl = "confirmation.html";
    window.open(confirmationPageUrl, "_blank");
}