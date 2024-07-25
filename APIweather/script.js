document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value.trim();
    const apiKey = 'b75aa2eac0dccb905dac6d3673e91b1d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weather-result').innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temp} °C</p>
                <p>Humidity: ${humidity} %</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `
                <p>City not found. Please try again.</p>
            `;
            console.error('Error fetching the weather data:', error);
        });
});
