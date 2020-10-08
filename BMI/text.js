// let bmi = weigth / (heigth * 2);
// if (bmi < 18.5) {
//   alert("Underweight");
// } else if (bmi < 25.0) {
//   alert("Normal");
// } else if (bmi < 30.0) {
//   alert("Overweight");
// } else {
//   alert("Obese");
// }
let weightDom = document.getElementById("weight");
let heightDom = document.getElementById("height");
let resultDom = document.getElementById("demo");
function bmi(toWeight, toHeight) {
  return toWeight / toHeight ** 2;
}
function bodyMass() {
  let bodyM;
  let result = bmi(weightDom.value, heightDom.value);
  if (result < 18.5) {
    bodyM = "Underweight";
  } else if (result < 25.0) {
    bodyM = "Normal";
  } else if (result < 30.0) {
    bodyM = "Overweight";
  } else {
    bodyM = "Obese";
  }
  resultDom.innerText = `Result : ${bodyM}`;
}
