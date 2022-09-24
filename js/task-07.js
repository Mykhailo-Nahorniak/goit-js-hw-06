const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${sizeControl.value}px`;
sizeControl.addEventListener('input', () => {
  text.style.fontSize = `${sizeControl.value}px`;
});
