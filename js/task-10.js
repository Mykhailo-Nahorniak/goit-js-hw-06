function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const targetDiv = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

let boxSize = 30;

function createBoxes(amount) {
  amount = input.value;

  if (amount > 100) {
    return window.alert('не більше 100');
  } else if (amount < 1) {
    return window.alert('не менше 1');
  }

  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    targetDiv.append(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  targetDiv.innerHTML = '';
  boxSize = 30;
  input.value = '';
}
