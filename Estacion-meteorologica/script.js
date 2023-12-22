//Api Key:bc1ef4d21c10455ea70103629232012
//http://api.weatherapi.com/v1/current.json?key=bc1ef4d21c10455ea70103629232012&q=Alicante&aqi=no

const apiKey = 'bc1ef4d21c10455ea70103629232012';
const city = 'Alicante'; 

document.addEventListener('DOMContentLoaded', () => {
  obtenerDatosTiempo();
});

async function obtenerDatosTiempo() {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const data = await response.json();
    
    mostrarInformacionClima(data);
  } catch (error) {
    console.error('Error al obtener los datos del tiempo:', error);
  }
}

function mostrarInformacionClima(data) {
  const weatherInfo = document.getElementById('weatherinfo');

  if (weatherInfo !== null) {
    const current = data.current;
    const location = data.location;

    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather-details');

    weatherDiv.innerHTML = `
      <h2>${location.name}, ${location.country}</h2>
      <p>Estado del clima: ${current.condition.text}</p>
      <img src="${current.condition.icon}" alt="${current.condition.text}">
      <p>Temperatura: ${current.temp_c}°C</p>
      <p>Precipitaciones: ${current.precip_mm} mm</p>
      <p>Humedad: ${current.humidity}%</p>
      <p>Viento: ${current.wind_kph} km/h</p>
    `;

    weatherInfo.appendChild(weatherDiv);
  } else {
    console.error('No se encontró el elemento con ID "weatherinfo".');
  }
}

