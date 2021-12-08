const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  const formData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    return alert('Все поля должны быть заполнены!');
  }

  console.log(formData);
  event.currentTarget.reset();
}
