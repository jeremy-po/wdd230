document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('last-modified').textContent = document.lastModified;
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const visitMessage = document.getElementById("visit-message");
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const daysBetweenVisits = Math.floor((currentVisit - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        if (daysBetweenVisits < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetweenVisits === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentVisit.toString());
});
