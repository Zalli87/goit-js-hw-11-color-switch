const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
  
function changeColor() {
   document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  };

const startBtnEl = document.querySelector('[data-action="start"]');
const stopBtnEl = document.querySelector('[data-action="stop"]');
let intervalId = '';

startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  intervalId = setInterval(changeColor, 1000);
 };

stopBtnEl.addEventListener('click', onStopBtnClik);

function onStopBtnClik() {
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
  clearInterval(intervalId);
}