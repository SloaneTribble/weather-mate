import sunny from "./images/sunny.png";
import fog from "./images/fog.png";
import cloudy from "./images/cloudy.png";
import overcast from "./images/overcast.png";
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
    overview.classList.add("five-day-img");
    const description = forecast.description;
    console.log(description);
    overview.src = choosePicture(description);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("five-day-img-container");

    imageContainer.appendChild(overview);

    const avgTemp = document.createElement("div");
    avgTemp.textContent = forecast.temp + "\xB0";

    dayContainer.appendChild(day);
    dayContainer.appendChild(imageContainer);
    dayContainer.appendChild(avgTemp);

    fiveDayContainer.appendChild(dayContainer);
  }

  return;
};

const choosePicture = function picChoose(description) {
  let imageSource;
  switch (true) {
    case description.includes("clear"):
      imageSource = sunny;
      break;
    case description.includes("haze"):
      imageSource = fog;
      break;
    case description.includes("overcast"):
      imageSource = overcast;
      break;
    case description.includes("clouds"):
      imageSource = cloudy;
      break;
    case description.includes("rain"):
      imageSource = rain;
      break;
    default:
      imageSource = sunny;
      break;
  }
  return imageSource;
};

export { displayFiveDay };

/**
 * <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Freepik - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Smashicons - Flaticon</a>
 * <a href="https://www.flaticon.com/free-icons/overcast" title="overcast icons">Overcast icons created by Ubaid El-Ahyar Alyafizi - Flaticon</a>
 */
