let counterValue = 0;
const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;

  return counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;

  return counterValue;
});
