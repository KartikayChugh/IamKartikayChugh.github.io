// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all "Read More" buttons
    const readMoreButtons = document.querySelectorAll(".btn-danger");

    // Add click event listener to each button
    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Open fylehq.com in a new tab
            window.open("https://fylehq.com", "_blank");
        });
    });
});
