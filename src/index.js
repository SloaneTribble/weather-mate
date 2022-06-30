import "./style.css";

import { fillPage } from "./fill-page";

import { clearDisplay } from "./clear-display";

import { getWeather, getForecast } from "./get-weather";

import { displayDaily } from "./display-daily";

import { displayFiveDay } from "./display-five-day";

fillPage();

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
  clearDisplay();

  const locationField = document.querySelector(".location");
  const location = locationField.value;
  console.log(location);

  const unitField = document.querySelector('input[name="units"]:checked').value;
  console.log(unitField);

  const units = unitField === "celsius" ? "metric" : "imperial";

  const dailyWeather = getWeather(location, units);

  // Use daily forecast object to create display
  dailyWeather.then((weatherObject) => displayDaily(weatherObject));

  /**
   * Extract latitude and longitude from daily forecast object, use as
   * arguments to search for 5-day forecast
   */
  const forecast = dailyWeather.then((weatherObject) => {
    const lat = weatherObject.latitude;
    const long = weatherObject.longitude;
    const forecastArray = getForecast(lat, long, units);

    // returns an array of 5 objects, each representing a day's forecast
    return forecastArray;
  });

  /**
   * Use array of forecast objects to display 5-day forecast
   */
  forecast.then((result) => displayFiveDay(result));
});
