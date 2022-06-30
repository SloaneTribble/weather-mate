import { getWeather } from "./get-weather";

/**
 * Take a daily forecast object, append its values to a series of html elements.
 * Append those elements to the daily-forecast-container element
 */
const displayDaily = function displayDailyForecast(forecastObject) {
  const container = document.querySelector(".daily-forecast-container");

  const description = document.createElement("div");
  let descriptionText = forecastObject.overview;
  descriptionText = format(descriptionText);
  description.textContent = descriptionText;

  const temp = document.createElement("div");
  temp.textContent = `Average: ${forecastObject.avgTemp}\xB0`;

  const feeling = document.createElement("div");
  feeling.textContent = `Feels Like: ${forecastObject.feel}\xB0`;

  const min = document.createElement("div");
  min.textContent = `Low: ${forecastObject.minTemp}\xB0`;

  const max = document.createElement("div");
  max.textContent = `High: ${forecastObject.maxTemp}\xB0`;

  container.appendChild(description);
  container.appendChild(temp);
  container.appendChild(feeling);
  container.appendChild(min);
  container.appendChild(max);

  document.body.appendChild(container);
};

const format = function capitalizeFirstWord(description) {
  const separateWords = description.split(" ");
  for (let i = 0; i < separateWords.length; i++) {
    separateWords[i] =
      separateWords[i].charAt(0).toUpperCase() + separateWords[i].substring(1);
  }
  return separateWords.join(" ");
};

export { displayDaily };
