const input = document.getElementById('font-size-control')
const text = document.getElementById('text')

const fontResizeScroll = (event) => {
    // text.style.fontSize = `${input.value}px`
    text.style.fontSize = `${input.value}px`
}

input.addEventListener('input', fontResizeScroll)