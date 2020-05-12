/* Global Variables */
const WEATHERAPIKEY = "d14498e1d6441199d14053bf26d766d9";
const BASEURL = "https://api.openweathermap.org/data/2.5/weather?";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", async (event) => {
  const zipInput = document.getElementById("zip");
  event.preventDefault();
  const weatherData = await fetchWeatherData(zipInput.value);

  console.log(weatherData);
});

async function fetchWeatherData(zipCode) {
  const query = `${BASEURL}zip=${zipCode}&appid=${WEATHERAPIKEY}`;
  return fetch(query);
}
