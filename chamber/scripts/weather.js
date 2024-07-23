const apiKey = '64ce899c6326c1fa6b86eaf5af52d17c';
const city = 'Arima';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        const forecastContainer = document.getElementById('forecast');

        
        forecastContainer.innerHTML = '';

        
        const today = new Date().getDate();
        const daysForecast = [];
        for (let i = 0; i < data.list.length; i += 8) {
            const day = data.list[i];
            const date = new Date(day.dt_txt);
            if (date.getDate() !== today) {
                daysForecast.push(day);
                if (daysForecast.length === 3) break;
            }
        }

        daysForecast.forEach(day => {
            const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
            const temp = day.main.temp;
            const desc = day.weather[0].description;
            const icon = day.weather[0].icon;

            const forecastElement = document.createElement('div');
            forecastElement.classList.add('forecast-day');
            forecastElement.innerHTML = `
                <h4>${date}</h4>
                <p>Temperature: ${temp} °C</p>
                <p>Description: ${desc}</p>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
            `;
            forecastContainer.appendChild(forecastElement);
        });
    } catch (error) {
        console.error('Error fetching the forecast data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getForecast();
});
