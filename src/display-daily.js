import { getWeather } from "./get-weather";

/**
 * Take a daily forecast object, append its values to a series of html elements.
 * Append those elements to the daily-forecast-container element
 */
const displayDaily = function displayDailyForecast(forecastObject) {
  const container = document.querySelector(".daily-forecast-container");

  const description = document.createElement("div");
  description.textContent = forecastObject.overview;

  const temp = document.createElement("div");
  temp.textContent = forecastObject.avgTemp;

  const feeling = document.createElement("div");
  feeling.textContent = forecastObject.feel;

  const min = document.createElement("div");
  min.textContent = forecastObject.minTemp;

  const max = document.createElement("div");
  max.textContent = forecastObject.maxTemp;

  container.appendChild(description);
  container.appendChild(temp);
  container.appendChild(feeling);
  container.appendChild(min);
  container.appendChild(max);

  document.body.appendChild(container);
};

export { displayDaily };
