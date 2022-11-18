const loginformEl = document.querySelector('.login-form');

loginformEl.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Усі поля чекають заповнення!');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
});
