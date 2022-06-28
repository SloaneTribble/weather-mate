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

  getForecast(latitude, longitude);

  return;
}

async function getForecast(latitude, longitude) {
  const forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=127129261617cbfa5cf75835b41e98fa&units=imperial`,
    { mode: "cors" }
  );

  const forecastData = await forecast.json();

  const dateList = forecastData.list;
  for (let i = 0; i < dateList.length; i += 8) {
    console.log(dateList[i]);
  }
}

export { getWeather };
