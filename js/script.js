// Portfolio Website Loaded Successfully
console.log("🚀 Sanjay Kumar Portfolio Loaded Successfully");

// Navbar links
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Navigated to: ${link.textContent}`);
    });
});

// Welcome message after page load
window.addEventListener("load", () => {
    console.log("Welcome to Sanjay Kumar's DevOps Portfolio!");
});
