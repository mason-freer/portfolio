// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section ID
        const sectionId = link.getAttribute('href');

        // Get the target section element
        const section = document.querySelector(sectionId);

        // Scroll to the target section smoothly
        section.scrollIntoView({ behavior: 'smooth' });
    });
});