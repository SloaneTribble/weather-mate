import rain from "./images/rain.png";

/**
 * Take an array of daily forecast objects, iterate over them and use their
 * properties to populate a series of divs.  Append those divs to a container div
 */
const displayFiveDay = function displayFiveDayForecast(forecastArray) {
  const fiveDayContainer = document.querySelector(
    ".five-day-forecast-container"
  );

  for (let forecast of forecastArray) {
    const dayContainer = document.createElement("div");
    dayContainer.className = "day-container";

    const day = document.createElement("div");
    day.textContent = forecast.date;

    const overview = document.createElement("img");
    const description = forecast.description;
    console.log(description);
    overview.src = choosePicture(description);

    const avgTemp = document.createElement("div");
    avgTemp.textContent = forecast.temp + "\xB0";

    dayContainer.appendChild(day);
    dayContainer.appendChild(overview);
    dayContainer.appendChild(avgTemp);

    fiveDayContainer.appendChild(dayContainer);
  }

  document.body.appendChild(fiveDayContainer);

  return;
};

const choosePicture = function picChoose(description) {
  let imageSource;
  switch (true) {
    default:
      imageSource = rain;
      break;
  }
  return imageSource;
};

export { displayFiveDay };

/**
 * <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
 */
