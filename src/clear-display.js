const removeChildren = function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return;
};

const clearDisplay = function clearBothDisplays() {
  const dailyDisplay = document.querySelector(".daily-forecast-container");

  const fiveDayDisplay = document.querySelector(".five-day-forecast-container");

  removeChildren(dailyDisplay);
  removeChildren(fiveDayDisplay);

  return;
};

export { clearDisplay };
