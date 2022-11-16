const inputField = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputField.addEventListener('input', event => {
  if (inputField.textContent == 'null') {
    nameOutput.textContent = `Anonymous`;
    // console.log(inputField.textContent);
    // console.log(nameOutput.textContent);
  } else {
    nameOutput.textContent = event.currentTarget.value;
    // console.log(inputField.textContent);
    // console.log(nameOutput.textContent);
  }
});

// console.log(inputField.textContent);
// console.log(nameOutput.textContent);
