const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
if (event.target.dataset.length == event.target.value.length) {
    input.classList.add('valid')
} else {
    input.classList.add('invalid');
}
}