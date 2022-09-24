const input = document.querySelector('input');

input.addEventListener('blur', checkInput);

function checkInput() {
  if (input.value.trim().length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
