const formEl = document.querySelector('.js-form');
const inputEl = document.querySelector('.js-input');
const outputEl = document.querySelector('.js-output');

inputEl.addEventListener('input', event => {
  outputEl.textContent = event.currentTarget.value;
});
