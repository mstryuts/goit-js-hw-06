function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorHexName = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

const onClickColorChange = () => {
  document.body.style.background = `${getRandomHexColor()}`;
  colorHexName.textContent = document.body.style.background;
};

changeColorBtn.addEventListener('click', onClickColorChange);
