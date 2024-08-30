document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle 'active' class for menu visibility
    navLinks.classList.toggle('active');

    // Rotate the hamburger menu icon when active
    document.querySelector('.hamburger').classList.toggle('is-active');
});
