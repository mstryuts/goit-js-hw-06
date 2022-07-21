const myInput = document.querySelector('#name-input' );
const mySpan = document.querySelector('#name-output');

const updateInpute = (event) => {

    event.currentTarget === '' ? mySpan.textContent = 'Anonymous'
        : mySpan.textContent = event.currentTarget.value;
}



myInput.addEventListener('input', updateInpute);



/// ну или как то так ¯\_(ツ)_/¯

// const updateInpute = (event) => {

//     // if (event.currentTarget === '') {
//     // mySpan.textContent = 'Anonymous'
//     // } else {
//     // mySpan.textContent = event.currentTarget.value;
//     // }
   
// }