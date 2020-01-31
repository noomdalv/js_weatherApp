const cityName = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityInfo = document.getElementById('cityInfo');
const tempInfo = document.getElementById('tempInfo');
const switchTemp = document.getElementById('switchTempBtn');
const statusInfo = document.getElementById('statusInfo');
const statusImg = document.getElementById('statusImg');
const windInfo = document.getElementById('windInfo');
let temp;

const getFahrenheit = (tempCelsius) => {
	let tempFahrenheit = (tempCelsius / (5/9)) + 32;
	return (tempFahrenheit.toFixed(2) + " °F");
}

const getCelsius = (tempFahrenheit) => {
	let tempCelsius = (tempFahrenheit - 32) * (5/9);
	return (tempCelsius.toFixed(2) + " °C");
}

// getFahrenheit(5.15);
// getCelsius(41.27);

const getWeather = async (city, temp) => {
	const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=c414b36c42d82ca02be257a1553e41c6&units=metric&q=" + cityName.value);
	const weatherData = await response.json();
	console.log(weatherData);
	cityInfo.innerHTML = weatherData.city.name;
	windInfo.innerHTML = ((weatherData.list[0].wind.speed) + " m/s");
	statusInfo.innerHTML = weatherData.list[0].weather[0].description;
	statusImg.src = `http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;
	temp = weatherData.list[0].main.temp;
	tempInfo.innerHTML = temp + " °C";
}

searchBtn.addEventListener("click", () => {
	getWeather(cityName);
})

cityName.addEventListener("keydown", () => {
	if (event.key === "Enter") {
    event.preventDefault();
		searchBtn.click();
	}
})
