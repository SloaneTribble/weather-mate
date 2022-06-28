import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerText = "hey";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
