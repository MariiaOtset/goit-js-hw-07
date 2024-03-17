// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);

function createBoxes() {
  const amount = input.value;
    if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
  boxesContainer.innerHTML = '';
  
  for (let i = 0; i < amount; i += 1) {
    let elem = document.createElement("div");
    elem.style.width = 30 + 10 * i + `px`;
    elem.style.height = 30 + 10 * i + `px`;
    elem.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(elem);
    input.value = "";
    }
  }

function destroyBoxes(amount) {
  boxesContainer.innerHTML = '';
}

function handleCreate() {
  createBoxes();
}

function handleDestroy() {
  destroyBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
