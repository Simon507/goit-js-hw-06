let counterValue = 0;
const monitor = document.querySelector('#value');
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

const handleClickDec = () => {
  counterValue -= 1;
  monitor.textContent = counterValue;
};

const handleClickInc = () => {
  counterValue += 1;
  monitor.textContent = counterValue;
};

btnDec.addEventListener('click', handleClickDec);
btnInc.addEventListener('click', handleClickInc);
