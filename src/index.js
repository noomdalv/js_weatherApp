// HTML Variables //

const cityName = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const errorMsg = document.getElementById('errorMsg');
const displayInfo = document.getElementById('displayInfo');
const cityInfo = document.getElementById('cityInfo');
const tempInfo = document.getElementById('tempInfo');
const switchTempBtn = document.getElementById('switchTempBtn');
const statusInfo = document.getElementById('statusInfo');
const statusImg = document.getElementById('statusImg');
const windInfo = document.getElementById('windInfo');
let temp; let
  tempUnit;

const getFahrenheit = (tempCelsius) => {
  const tempFahrenheit = (tempCelsius / (5 / 9)) + 32;
  temp = tempFahrenheit.toFixed(2);
  tempUnit = 'F';
  tempInfo.innerHTML = (`${temp} °F`);
  switchTempBtn.innerHTML = 'Switch to °C';
};

const getCelsius = (tempFahrenheit) => {
  const tempCelsius = (tempFahrenheit - 32) * (5 / 9);
  temp = tempCelsius.toFixed(2);
  tempUnit = 'C';
  tempInfo.innerHTML = (`${temp} °C`);
  switchTempBtn.innerHTML = 'Switch to °F';
};

const displayWeatherData = (data) => {
  if (data.cod === '200') {
    errorMsg.style.visibility = 'hidden';
    displayInfo.style.visibility = 'visible';
    cityInfo.innerHTML = data.city.name;
    windInfo.innerHTML = (`${data.list[0].wind.speed} m/s`);
    statusInfo.innerHTML = data.list[0].weather[0].description;
    statusImg.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    tempInfo.innerHTML = `${data.list[0].main.temp} °C`;
    temp = data.list[0].main.temp;
    tempUnit = 'C';
  } else if (data.cod === '404') {
    errorMsg.style.visibility = 'visible';
    displayInfo.style.visibility = 'hidden';
  }
};

const getWeather = async () => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c414b36c42d82ca02be257a1553e41c6&units=metric&q=${cityName.value}`);
  const weatherData = await response.json();
  await displayWeatherData(weatherData);
};

searchBtn.addEventListener('click', () => {
  if (cityName.value.length > 0) {
    getWeather(cityName);
  }
});

cityName.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchBtn.click();
  }
});

switchTempBtn.addEventListener('click', () => {
  if (tempUnit === 'C') {
    getFahrenheit(temp);
  } else if (tempUnit === 'F') {
    getCelsius(temp);
  }
});
