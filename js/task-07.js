const inputEl = document.querySelector('#font-size-control');
const txtEl = document.querySelector('#text');
inputEl.addEventListener('input', event => {
  txtEl.style.fontSize = `${event.target.value}px`;
});
