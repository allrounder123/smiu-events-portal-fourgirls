
document.addEventListener("DOMContentLoaded", function () {

    // Handle all demonstration forms
    document.querySelectorAll(".demo-form").forEach(function (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.checkValidity()) {
                form.classList.add("was-validated");
                return;
            }

            const feedback = form.querySelector(".form-feedback");

            if (feedback) {
                feedback.innerHTML = `
                    <div class="alert alert-success" role="status">
                        Thank you! Your form was submitted successfully
                        for this front-end demonstration.
                    </div>
                `;
            }

            form.reset();
            form.classList.remove("was-validated");
        });

    });

});
