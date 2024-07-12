const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
    try {
        const latitude = '49.75'; 
        const longitude = '6.64'; 
        const units = 'imperial'; 
        const apiKey = '64ce899c6326c1fa6b86eaf5af52d17c'; 

        const apiUrl = `${url}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched data:', data); 

        displayResults(data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(data) {
    console.log('Displaying data:', data);

    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`; 
    const iconCode = data.weather[0].icon; 
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', desc); 
    captionDesc.textContent = desc; 
}

apiFetch(); 