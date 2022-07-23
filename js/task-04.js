let counterValue = 0;
const incr = document.querySelector('button[data-action="increment"]');
const decr = document.querySelector('button[data-action="decrement"]');
let value = document.querySelector('#value');

const onClickDecr = () =>{
    counterValue -= 1;
    value.textContent = counterValue;
}

const onClickIncr = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

incr.addEventListener('click', onClickIncr);
decr.addEventListener('click', onClickDecr);
