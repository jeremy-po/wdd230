document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mainElements = document.querySelectorAll('body, .header_content, nav ul, nav a, .learning_activities, .information, footer');
    
    darkModeToggle.addEventListener('click', () => {
        mainElements.forEach(element => {
            element.classList.toggle('dark-mode');
        });
    });
});