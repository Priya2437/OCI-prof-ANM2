const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('search').addEventListener('click', function() {
  const city = document.getElementById('city').value;
  if (city) {
    getWeather(city);
  }
});

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        alert('City not found, please try again.');
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching data, please try again.');
    });
}

function displayWeather(data) {
  document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
