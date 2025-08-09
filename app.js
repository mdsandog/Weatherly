const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;

    resultDiv.innerHTML = weather;
  } catch (error) {
    resultDiv.innerHTML = "Could not fetch weather. Please try again.";
  }
}
