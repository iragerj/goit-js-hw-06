const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text')

input.addEventListener('input', onInputChange );


function onInputChange(event) {
  span.style.fontSize = `${event.target.value}px`;
}