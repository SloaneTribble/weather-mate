/**
 * Allow user to choose temperature units.  Choices = imperial and metric;
 * example:
 * "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=127129261617cbfa5cf75835b41e98fa&units=imperial"
 */

async function getWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ojai,california&APPID=127129261617cbfa5cf75835b41e98fa&units=imperial",
    { mode: "cors" }
  );

  const responseData = await response.json();

  console.log(responseData);

  const overview = responseData.weather[0].description;
  console.log(`overview: ${overview}`);

  //   const weather = {
  //     description: responseData.weather[0].main,
  //   }

  const latitude = responseData.coord.lat;

  const longitude = responseData.coord.lon;

  return;
}

async function getForecast(latitude, longitude) {
  const forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=127129261617cbfa5cf75835b41e98fa&units=imperial`,
    { mode: "cors" }
  );

  const forecastData = await forecast.json();

  const dateList = forecastData.list;

  // An array for date objects
  const dateArray = [];
  for (let i = 0; i < dateList.length; i += 8) {
    const currentDate = dateList[i];

    const description = currentDate.weather[0].description;

    const temp = currentDate.main.temp;

    const feelsLike = currentDate.main.feels_like;

    const tempMin = currentDate.main.temp_min;

    const tempMax = currentDate.main.temp_max;

    dateArray.push({ description, temp, feelsLike, tempMin, tempMax });
  }

  return dateArray;
}

export { getWeather, getForecast };
