import "./style.css";

import { getWeather, getForecast } from "./get-weather";

import { displayDaily } from "./display-daily";

import { displayFiveDay } from "./display-five-day";

const dailyWeather = getWeather("new york city, new york");

// Use daily forecast object to create display
dailyWeather.then((weatherObject) => displayDaily(weatherObject));

/**
 * Extract latitude and longitude from daily forecast object, use as
 * arguments to search for 5-day forecast
 */
const forecast = dailyWeather.then((weatherObject) => {
  const lat = weatherObject.latitude;
  const long = weatherObject.longitude;
  const forecastArray = getForecast(lat, long);

  // returns an array of 5 objects, each representing a day's forecast
  return forecastArray;
});

/**
 * Use array of forecast objects to display 5-day forecast
 */
forecast.then((result) => displayFiveDay(result));
