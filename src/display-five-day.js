/**
 * Take an array of daily forecast objects, iterate over them and use their
 * properties to populate a series of divs.  Append those divs to a container div
 */
const displayFiveDay = function displayFiveDayForecast(forecastArray) {
  const fiveDayContainer = document.createElement("div");

  for (let forecast of forecastArray) {
    const dayContainer = document.createElement("div");
    dayContainer.className = "day-container";

    const day = document.createElement("div");
    day.textContent = forecast.date;

    const overview = document.createElement("div");
    overview.textContent = forecast.description;

    const avgTemp = document.createElement("div");
    avgTemp.textContent = forecast.temp;

    const feel = document.createElement("div");
    feel.textContent = forecast.feelsLike;

    const minTemp = document.createElement("div");
    minTemp.textContent = forecast.tempMin;

    const maxTemp = document.createElement("div");
    maxTemp.textContent = forecast.tempMax;

    dayContainer.appendChild(day);
    dayContainer.appendChild(overview);
    dayContainer.appendChild(avgTemp);
    dayContainer.appendChild(feel);
    dayContainer.appendChild(minTemp);
    dayContainer.appendChild(maxTemp);

    fiveDayContainer.appendChild(dayContainer);
  }

  document.body.appendChild(fiveDayContainer);

  return;
};

export { displayFiveDay };
