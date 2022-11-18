function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const controlEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
let a = 30;
let b = 30;

controlEl.onclick = function (event) {
  let target = event.target; // где был клик?

  if (target.hasAttribute('data-create')) {
    createBoxes(inputEl.value);
  } else if (target.hasAttribute('data-destroy')) {
    destroyBoxes();
  }
};

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    boxesEl.style.display = 'flex';
    boxesEl.style.flexWrap = 'wrap';
    boxesEl.style.gap = '5px';
    const newItem = document.createElement('div');
    newItem.style.width = `${a}px`;
    newItem.style.height = `${b}px`;
    newItem.textContent = i;
    newItem.style.display = 'flex';
    newItem.style.justifyContent = 'center';
    newItem.style.alignItems = 'center';
    newItem.style.background = getRandomHexColor();
    boxesEl.append(newItem);
    a += 10;
    b += 10;
  }
}

function destroyBoxes() {
  while (boxesEl.firstChild) {
    boxesEl.firstChild.remove();
    a = 30;
    b = 30;
  }
}
