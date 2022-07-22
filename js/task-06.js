const myInput = document.querySelector('#validation-input')

const onInputBlur = e => {
    if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
        myInput.classList.remove('invalid')  
        myInput.classList.add('valid')  
    } else {
        myInput.classList.remove('valid')  
        myInput.classList.add('invalid')  
    }
}

myInput.addEventListener('blur',onInputBlur)
