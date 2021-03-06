import { formatRelative } from "date-fns";

const fillPage = function populateBodyWithDivs() {
  const mainContainer = pageContainerMaker();

  const header = makeHeader();

  const daily = makeDaily();

  const fiveDay = makeFiveDay();

  const footer = makeFooter();

  mainContainer.appendChild(header);
  mainContainer.appendChild(daily);
  mainContainer.appendChild(fiveDay);
  mainContainer.appendChild(footer);

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

  header.appendChild(makeTitle());
  header.appendChild(makeForm());

  return header;
};

const makeTitle = function titleMaker() {
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Weather Mate";

  return title;
};

const makeForm = function formMaker() {
  const form = document.createElement("form");
  form.classList.add("form");

  const location = document.createElement("input");
  location.classList.add("location");
  location.type = "text";
  location.name = "location";
  location.placeholder = "Location";

  const fLabel = document.createElement("label");
  fLabel.htmlFor = "fahrenheit";
  fLabel.textContent = "Fahrenheit";

  const fahrenheit = document.createElement("input");
  fahrenheit.type = "radio";
  fahrenheit.name = "units";
  fahrenheit.value = "fahrenheit";
  fahrenheit.id = "fahrenheit";
  fahrenheit.checked = true;
  fahrenheit.required = true;

  const cLabel = document.createElement("label");
  cLabel.htmlFor = "celsius";
  cLabel.textContent = "Celsius";

  const celsius = document.createElement("input");
  celsius.type = "radio";
  celsius.name = "units";
  celsius.value = "celsius";
  celsius.id = "celsius";

  const tempContainer = document.createElement("div");
  tempContainer.classList.add("temp-container");
  tempContainer.appendChild(fLabel);
  tempContainer.appendChild(fahrenheit);
  tempContainer.appendChild(cLabel);
  tempContainer.appendChild(celsius);

  const submit = document.createElement("button");
  submit.classList.add("submit-button");
  submit.type = "submit";
  submit.textContent = "Submit";

  form.appendChild(location);
  form.appendChild(tempContainer);
  form.appendChild(submit);

  return form;
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

const makeFooter = function footerMaker() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML =
    "<a href='https://github.com/SloaneTribble'>Sloane Tribble</a> <a href='https://www.flaticon.com/free-icons/sun' title='sun icons'>Icons created by Freepik - Flaticon</a>";

  return footer;
};

export { fillPage };
