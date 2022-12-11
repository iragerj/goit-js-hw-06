function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

button.addEventListener("click", onClickButton);

function onClickButton() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
