import "./style.css";

import { getWeather, getForecast } from "./get-weather";

const dailyWeather = getWeather();

// Use daily forecast object to create display

dailyWeather.then(console.log("I hope this is cool"));

/**
 * Extract latitude and longitude from daily forecast object, use as
 * arguments to search for 5-day forecast
 */
const forecast = dailyWeather.then((weatherObject) => {
  const lat = weatherObject.latitude;
  const long = weatherObject.longitude;
  const forecastArray = getForecast(lat, long);

  // returns an array of objects, each with a day's forecast
  return forecastArray;
});

/**
 * Use
 */
forecast.then((result) => console.log(result[0]));
