import { format, parseISO } from "date-fns";

/**
 * Allow user to choose temperature units.  Choices = imperial and metric;
 * example:
 * "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=127129261617cbfa5cf75835b41e98fa&units=imperial"
 */

async function getWeather(input, units) {
  const location = formatLoc(input);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=127129261617cbfa5cf75835b41e98fa&units=${units}`,
      { mode: "cors" }
    );

    const responseData = await response.json();

    console.log(responseData);

    const latitude = responseData.coord.lat;

    const longitude = responseData.coord.lon;

    const overview = responseData.weather[0].description;

    const avgTemp = responseData.main.temp;

    const feel = responseData.main.feels_like;

    const minTemp = responseData.main.temp_min;

    const maxTemp = responseData.main.temp_max;

    return { latitude, longitude, overview, avgTemp, feel, minTemp, maxTemp };
  } catch (error) {
    alert(
      "Please check format: {City}, {City, State}, {City, Country}, or {City, State, Country}"
    );
    return;
  }
}

async function getForecast(latitude, longitude, units) {
  const forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=127129261617cbfa5cf75835b41e98fa&units=${units}`,
    { mode: "cors" }
  );

  const forecastData = await forecast.json();

  const dateList = forecastData.list;

  // An array for date objects
  const dateArray = [];
  // Begin iterating through array one day ahead
  for (let i = 7; i <= dateList.length; i += 8) {
    const currentDate = dateList[i];

    // Get current date and time, remove time
    let date = currentDate.dt_txt.split(" ")[0];

    // Parse date string and then format using date-fns
    date = format(parseISO(date), "P");

    const description = currentDate.weather[0].description;

    const temp = currentDate.main.temp;

    dateArray.push({
      date,
      description,
      temp,
    });
  }

  return dateArray;
}

const formatLoc = function formatLocation(input) {
  // separate city name from state and/or country
  const locationArray = input.split(",");

  //Replace spaces in each array element with plus signs
  for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].replace(/\s/g, "+");
  }

  // Join array elements back into a single string
  const location = String(locationArray);

  return location;
};

export { getWeather, getForecast };
