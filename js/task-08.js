const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const element = event.currentTarget.elements;

  const email = element.email.value;
  const password = element.password.value;

  if (email === '' || password === '') {
    return window.alert('Всі поля потрібно заповнити');
  }

  const data = {
    email,
    password,
  };

  console.log(data);

  form.reset();
}
