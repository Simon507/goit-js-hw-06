const inputFieldEl = document.querySelector('#name-input');
inputFieldEl.value = '';
const nameOutputEl = document.querySelector('#name-output');

inputFieldEl.addEventListener('input', event => {
  if (inputFieldEl.value == '') {
    nameOutputEl.textContent = 'Anonimous';
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
});
