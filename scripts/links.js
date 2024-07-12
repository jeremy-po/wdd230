// links.js

document.addEventListener('DOMContentLoaded', () => {
    const linksURL = "https://jeremy-po.github.io/wdd230/data/links.json";

    async function getLinks() {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayLinks(data.weeks);
        } catch (error) {
            console.error('Error fetching links data:', error);
        }
    }

    function displayLinks(weeks) {
        const learningActivities = document.querySelector('.learning_activities ul');
        learningActivities.innerHTML = '';

        weeks.forEach(week => {
            const listItem = document.createElement('li');
            listItem.textContent = `${week.week}: `;

            week.links.forEach((link, index) => {
                const anchor = document.createElement('a');
                anchor.href = link.url;
                anchor.textContent = link.title;
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";

                listItem.appendChild(anchor);
                if (index < week.links.length - 1) {
                    listItem.appendChild(document.createTextNode(' | '));
                }
            });

            learningActivities.appendChild(listItem);
        });
    }

    getLinks();
});
