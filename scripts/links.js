const baseURL = 'https://jeremy-po.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const container = document.getElementById('activity-links');
    container.innerHTML = '<h2>Learning Activities</h2>';

    const weekList = document.createElement('ul');
    weeks.weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = `${link.url}`;
            anchor.textContent = link.title;

            weekItem.appendChild(anchor);
            if (index < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(' | '));
            }
        });

        weekList.appendChild(weekItem);
    });

    container.appendChild(weekList);
}

getLinks();
