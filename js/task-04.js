let counterValueEl = 0;

// *****   СНАЧАЛА ПОПРОБОВАЛ ТАК КАК В КОНЦЕ - РАБОТАЕТ,
// НО РЕШИЛ ПОПРОБОВАТЬ ЧЕРЕЗ ПРЕДКА ******

// ------  ВОПРОС - КК ЛУЧШЕ ?  -----

const monitorEl = document.querySelector('#value');
const counterEl = document.querySelector('#counter');

counterEl.onclick = function (event) {
  let target = event.target; // где был клик?

  if (target.dataset.action == 'decrement') {
    counterValueEl -= 1;
    monitorEl.textContent = counterValueEl;
  } else if (target.dataset.action == 'increment') {
    counterValueEl += 1;
    monitorEl.textContent = counterValueEl;
  }
};

// const btnDecEl = document.querySelector('button[data-action="decrement"]');
// const btnIncEl = document.querySelector('button[data-action="increment"]');

// const handleClickDec = () => {
//   counterValueEl -= 1;
//   monitorEl.textContent = counterValueEl;
// };

// const handleClickInc = () => {
//   counterValueEl += 1;
//   monitorEl.textContent = counterValueEl;
// };

// btnDecEl.addEventListener('click', handleClickDec);
// btnIncEl.addEventListener('click', handleClickInc);
