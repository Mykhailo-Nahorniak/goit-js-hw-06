function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', bgColorChange);

function bgColorChange() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = body.style.backgroundColor;
}
