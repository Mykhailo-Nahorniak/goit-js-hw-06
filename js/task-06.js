const input = document.querySelector('input');

input.addEventListener('blur', checkInput);

function checkInput() {
  if (input.value.trim().length >= 6) {
    input.classList = 'valid';
  } else {
    input.classList = 'invalid';
  }
}
