document.addEventListener("DOMContentLoaded", () => {

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            validateForm(form);
        });
    });

    function validateForm(form) {
        let isValid = true;

        const inputs = form.querySelectorAll("input");

        inputs.forEach(input => {
            const error = input.nextElementSibling;

            if (input.value.trim() === "") {
                error.textContent = "This field is required";
                isValid = false;
            } else {
                error.textContent = "";
            }
        });

        if (form.id === "registerForm") {
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirmPassword");
            const confirmError = confirmPassword.nextElementSibling;

            if (password.value !== confirmPassword.value) {
                confirmError.textContent = "Passwords do not match";
                isValid = false;
            }
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    }
});
