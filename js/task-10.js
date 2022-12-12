function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesWrapper = document.querySelector("#boxes");

createBtn.addEventListener("click", (e) => createBoxes(input.value));

function createBoxes(amount) {
  let size = 30;

  for (let i = amount; i > 0; i--) {
    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesWrapper.append(divEl);

    size = size + 10;
  }
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  boxesWrapper.innerHTML = "";
}
