const loginformEl = document.querySelector('.login-form');

loginformEl.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    return alert('Усі поля чекають заповнення!');
  } else {
    const registeredUser = {
      email: email.value,
      password: password.value,
    };
    console.log(registeredUser);
    event.currentTarget.reset();
  }
});
