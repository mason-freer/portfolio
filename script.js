const navLinks = document.querySelectorAll('nav a');

// Add event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const sectionId = link.getAttribute('href');

        // If moving to internal page
        if (sectionId.startsWith("#")) {
            event.preventDefault(); // don't page refresh

            // get target section
            const section = document.querySelector(sectionId);

            // scroll to target section
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
