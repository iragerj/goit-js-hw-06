let counterValue = 0;

const buttons = document.querySelectorAll('button');
const counter = document.querySelector('#value');

buttons.forEach((button) => {
    button.addEventListener('click', onClick)
})

function onClick(event) {
if (event.target.dataset.action === 'increment') {
    counterValue +=1;
} else {
    counterValue -=1;
}

counter.textContent = counterValue;
}

