const apiKey = '64ce899c6326c1fa6b86eaf5af52d17c';
const city = 'Arima';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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

getWeather();