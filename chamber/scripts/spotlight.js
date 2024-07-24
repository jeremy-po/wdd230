document.addEventListener('DOMContentLoaded', () => {
    loadSpotlightMembers();
});

function loadSpotlightMembers() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(members => {
            const qualifiedMembers = members.filter(member => 
                member.membership_level === 'Gold' || member.membership_level === 'Silver'
            );
            const spotlightMembers = getRandomElements(qualifiedMembers, 3);
            displaySpotlightMembers(spotlightMembers);
        })
        .catch(error => console.error('Error loading spotlight members:', error));
}

function getRandomElements(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlightMembers(members) {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = members.map(member => `
        <div class="spotlight-card">
            <img src="/wdd230/chamber${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        </div>
    `).join('');
}
