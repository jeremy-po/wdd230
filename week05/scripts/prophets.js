const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    const cards = document.querySelector('#cards');

    async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }

    const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        card.classList.add('card');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.firstName} ${prophet.lastName}`;

        const portrait = document.createElement('img');
        portrait.src = prophet.imagePath;
        portrait.alt = `Portrait of ${prophet.firstName} ${prophet.lastName}`;
        portrait.loading = 'lazy';
        portrait.width = 200;
        portrait.height = 250;

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
    };

    getProphetData();
