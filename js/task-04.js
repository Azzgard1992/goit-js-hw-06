let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

buttonDecrement.addEventListener('click', onButtonDecrementClick);
buttonIncrement.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onButtonIncrementClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
