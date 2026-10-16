// Select the navigation elements.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
// Close the mobile menu when a navigation link is clicked.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});
// Display the current year in the footer.
document.getElementById("year").textContent =
    new Date().getFullYear();
// Handle the contact form.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
contactForm.addEventListener("submit", function (event) {
    // Stop the page from reloading.
    event.preventDefault();
    // Check that all required fields are valid.
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }
    // Read the visitor's name.
    const visitorName = document.getElementById("name").value.trim();
    // Show a success message.
    formMessage.textContent =
        `Thank you, ${visitorName}! Your form is valid, but this demo does not send messages yet.`;
    // Clear the form fields.
    contactForm.reset();
})