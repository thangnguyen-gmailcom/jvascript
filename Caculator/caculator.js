let firstDom = document.getElementById("first");
let secondDom = document.getElementById("second");
let resultDom = document.getElementById("demo");

function toAddition(numberone, numbertow) {
  return Number(numberone) + Number(numbertow);
}
function toSubtraction(numberone, numbertow) {
  return Number(numberone) - Number(numbertow);
}
function toMultiplication(numberone, numbertow) {
  return Number(numberone) * Number(numbertow);
}
function toDivison(numberone, numbertow) {
  return Number(numberone) / Number(numbertow);
}
function addition() {
  let numberOne = firstDom.value;
  let numberTow = secondDom.value;
  let result = toAddition(numberOne, numberTow);
  resultDom.innerText = `Result Additon: ${result}`;
}
function subtraction() {
  let numberOne = firstDom.value;
  let numberTow = secondDom.value;
  let result = toSubtraction(numberOne, numberTow);
  resultDom.innerText = `Result Additon: ${result}`;
}
function multiplication() {
  let numberOne = firstDom.value;
  let numberTow = secondDom.value;
  let result = toMultiplication(numberOne, numberTow);
  resultDom.innerText = `Result Additon: ${result}`;
}
function divison() {
  let numberOne = firstDom.value;
  let numberTow = secondDom.value;
  let result = toDivison(numberOne, numberTow);
  resultDom.innerText = `Result Additon: ${result}`;
}
