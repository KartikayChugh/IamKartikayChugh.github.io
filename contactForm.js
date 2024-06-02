document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            terms: document.getElementById("terms").checked
        };

        if (formData.terms) {
            // Here, you could handle the form data as needed
            // For example, displaying a success message
            alert("Form submitted successfully!");
            contactForm.reset();
            // If you have a popup form you want to hide, uncomment the next line
            // popupForm.style.display = "none";
        } else {
            alert("You must agree to the terms and conditions.");
        }
    });
});
