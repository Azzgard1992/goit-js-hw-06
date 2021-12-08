function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  createBoxes(getAmount);
});
buttonDestroy.addEventListener('click', destroyBoxes);
input.addEventListener('input', getAmount);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getAmount(event) {
  return event.currentTarget.value;
}
