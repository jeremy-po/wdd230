document.addEventListener('DOMContentLoaded', () => {
    setDateInfo();
    handleHamburgerMenu();
    displayVisitMessage();

    if (document.getElementById('member-container')) {
        loadMemberDirectory();
    }
});

function setDateInfo() {
    document.getElementById('last-modified').textContent = document.lastModified;
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

function handleHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

function displayVisitMessage() {
    const visitMessage = document.getElementById("visit-message");
    const currentVisit = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const daysBetweenVisits = Math.floor((currentVisit - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        visitMessage.textContent = daysBetweenVisits < 1 
            ? "Back so soon! Awesome!" 
            : `You last visited ${daysBetweenVisits} day${daysBetweenVisits > 1 ? 's' : ''} ago.`;
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentVisit.toString());
}

function loadMemberDirectory() {
    const memberContainer = document.getElementById("member-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    fetch("/wdd230/chamber/data/members.json")
        .then(response => response.json())
        .then(members => displayMembers(members))
        .catch(error => console.error('Error loading members:', error));

    gridViewBtn.addEventListener("click", () => toggleView('grid'));
    listViewBtn.addEventListener("click", () => toggleView('list'));

    function displayMembers(members) {
        memberContainer.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="/wdd230/chamber/${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
            </div>
        `).join('');
    }

    function toggleView(view) {
        memberContainer.className = view;
        gridViewBtn.classList.toggle('active', view === 'grid');
        listViewBtn.classList.toggle('active', view === 'list');
    }
}
