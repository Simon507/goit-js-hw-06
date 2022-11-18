function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', event => {
  colorEl.textContent = getRandomHexColor();
  widgetEl.style.backgroundColor = getRandomHexColor();
});
