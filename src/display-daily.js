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

  let imageStyle = chooseStyle(forecastObject.overview);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("daily-image-container");

  const image = document.createElement("img");
  image.classList.add("daily-image");
  addGif(image, imageStyle);

  const temp = document.createElement("div");
  temp.textContent = `Average: ${forecastObject.avgTemp}\xB0`;

  const feeling = document.createElement("div");
  feeling.textContent = `Feels Like: ${forecastObject.feel}\xB0`;

  const min = document.createElement("div");
  min.textContent = `Low: ${forecastObject.minTemp}\xB0`;

  const max = document.createElement("div");
  max.textContent = `High: ${forecastObject.maxTemp}\xB0`;

  const statsContainer = document.createElement("div");
  statsContainer.classList.add("daily-stats-container");

  imageContainer.appendChild(image);

  statsContainer.appendChild(description);
  statsContainer.appendChild(temp);
  statsContainer.appendChild(feeling);
  statsContainer.appendChild(min);
  statsContainer.appendChild(max);

  container.appendChild(statsContainer);
  container.appendChild(imageContainer);
};

const format = function capitalizeFirstWord(description) {
  const separateWords = description.split(" ");
  for (let i = 0; i < separateWords.length; i++) {
    separateWords[i] =
      separateWords[i].charAt(0).toUpperCase() + separateWords[i].substring(1);
  }
  return separateWords.join(" ");
};

const addGif = function fetchGif(image, style) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=umcSu4OKde9HxKB2XzPu3WrecdvJqniu&s=${style}&weirdness=5`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      image.src = response.data.images.original.url;
    });
};

const chooseStyle = function styleChoose(description) {
  let imageStyle;
  switch (true) {
    case description.includes("clouds"):
      imageStyle = "cloudy#weather";
      break;
    case description.includes("rain"):
      imageStyle = "rain#weather";
      break;
    case description.includes("thunder"):
      imageStyle = "rain#thunder";
      break;
    case description.includes("clear"):
      imageStyle = "sunny#weather";
      break;
    case description.includes("haze"):
      imageStyle = "foggy#weather";
      break;
    default:
      imageStyle = "weather+man#weather";
      break;
  }
  return imageStyle;
};

export { displayDaily };
