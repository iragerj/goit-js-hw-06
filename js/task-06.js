const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (parseInt(event.target.dataset.length) === event.target.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
