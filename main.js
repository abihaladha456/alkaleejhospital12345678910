// script.js

// Function to display an alert when the "Contact Us" section is clicked
function contactUsAlert() {
    alert("For inquiries or appointments, please contact us at: info@xyzhospital.com");
}

// Attach the contactUsAlert function to the "Contact Us" section
const contactSection = document.querySelector('section:nth-of-type(4)'); // Assuming it's the fourth section on the page
contactSection.addEventListener('click', contactUsAlert);
