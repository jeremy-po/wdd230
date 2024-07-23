const members = [
    { name: 'HAKKA', description: 'Dine in or take-away restaurant in Arima.', level: 'gold' },
    { name: 'X-Tra Foods', description: 'Top-rated supermarket for all your needs.', level: 'silver' },
    { name: 'G3 Hardware', description: 'The number 1 hardware in Arima.', level: 'bronze' }
];

function displaySpotlights() {
    const spotlightContainer = document.getElementById('spotlight-container');
    const qualifiedMembers = members.filter(member => member.level === 'silver' || member.level === 'gold');
    const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    shuffledMembers.forEach(member => {
        const spotlightAd = document.createElement('div');
        spotlightAd.classList.add('spotlight-ad');
        spotlightAd.innerHTML = `
            <h4>${member.name}</h4>
            <p>${member.description}</p>
            <p>Membership Level: ${member.level}</p>
        `;
        spotlightContainer.appendChild(spotlightAd);
    });
}

displaySpotlights();
