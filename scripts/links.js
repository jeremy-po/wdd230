function displayLinks(weeks) {
    const learningActivities = document.querySelector('.learning_activities ul');
    learningActivities.innerHTML = '';

    try {
        if (!Array.isArray(weeks)) {
            throw new Error('Weeks data is not an array');
        }

        weeks.forEach(week => {
            const listItem = document.createElement('li');
            listItem.textContent = `${week.week}: `;

            if (!Array.isArray(week.links)) {
                throw new Error('Links for the week are not an array');
            }

            week.links.forEach(link => {
                const anchor = document.createElement('a');
                anchor.href = `${baseURL}${link.url}`;
                anchor.textContent = link.title;
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";

                listItem.appendChild(anchor);
                listItem.appendChild(document.createTextNode(' | '));
            });

            learningActivities.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error displaying links:', error);
    }
}
