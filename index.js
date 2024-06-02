document.addEventListener("DOMContentLoaded", function() {
    // Contact Us Button
    const contactButton = document.getElementById("contactButton");
    const popupForm = document.getElementById("popupForm");

    contactButton.addEventListener("click", function() {
        popupForm.style.display = "block";
    });

    // Close the Popup Form
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Change Project Image on Click
    const projectDetails = document.getElementById("projectDetails");
    projectDetails.addEventListener("click", function() {
        const projectImage = document.getElementById("projectImage");
        projectImage.src = "images/project-clicked.jpg"; // Update with your image path
    });
});
