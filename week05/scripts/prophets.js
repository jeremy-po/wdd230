const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
    } catch (error) {
    console.error('Error fetching prophet data:', error);
    }
}

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
    const card = document.createElement('section');
    card.classList.add('card');

    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    const birthInfo = document.createElement('p');
    birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

    const portrait = document.createElement('img');
    portrait.src = prophet.imageurl;
    portrait.alt = `${prophet.name} ${prophet.lastname}`;
    portrait.loading = 'lazy';
    portrait.width = 200; 
    portrait.height = 250; 

    card.appendChild(fullName);
    card.appendChild(birthInfo);
    card.appendChild(portrait);

    cards.appendChild(card);
    });
}

getProphetData();
