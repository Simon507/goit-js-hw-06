const inputEl = document.querySelector('#validation-input');
// const countEl

inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    event.currentTarget.setAttribute('class', 'valid');
  } else {
    event.currentTarget.setAttribute('class', 'invalid');
  }
});

console.log(inputEl.value);
