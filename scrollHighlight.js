// JavaScript Scroll Highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    // Loop through sections to find the one currently in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) { // Adjust 60 for navbar height if needed
            currentSection = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});