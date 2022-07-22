const myInput = document.querySelector('#name-input');
const mySpan = document.querySelector('#name-output');

const updateInpute = event => {

    event.currentTarget.value === '' ? mySpan.textContent = 'Anonymous'
        : mySpan.textContent = event.currentTarget.value;
}

myInput.addEventListener('input', updateInpute);
