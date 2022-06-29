const fillPage = function populateBodyWithDivs() {
  const mainContainer = pageContainerMaker();

  const header = makeHeader();

  const daily = makeDaily();

  const fiveDay = makeFiveDay();

  mainContainer.appendChild(header);
  mainContainer.appendChild(daily);
  mainContainer.appendChild(fiveDay);

  document.body.appendChild(mainContainer);
};

const pageContainerMaker = function makeMainContainer() {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("main-container");

  return pageContainer;
};

const makeHeader = function headerMaker() {
  const header = document.createElement("div");
  header.classList.add("header");

  return header;
};

const makeDaily = function makeDailyForecastContainer() {
  const dailyContainer = document.createElement("div");
  dailyContainer.classList.add("daily-forecast-container");

  return dailyContainer;
};

const makeFiveDay = function makeFiveDayForecastContainer() {
  const fiveDayContainer = document.createElement("div");
  fiveDayContainer.classList.add("five-day-forecast-container");

  return fiveDayContainer;
};

export { fillPage };
