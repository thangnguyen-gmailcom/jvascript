let Currency = document.getElementById("From");
let ToCurrenvy = document.getElementById("To");
let amou = document.getElementById("amo");

let rate = {
  VND: 23000,
  USD: 1,
  Euro: 0.85,
};

console.log(rate["VND"]);
console.log(rate.VND);

// let input = 10000;

// function toUsd(input, currency) {
//   return (input * USD) / currency;
// }
// console.log(toUsd(10000, 23000));

function toUsd(amou, From) {
  debugger;
  return (amou * rate["USD"]) / To;
}
function toVnd(amou, currency) {
  return (amou * rate[VND]) / currency;
}
function toEuro(amou, currency) {
  return (amou * rate[Euro]) / currency;
}
console.log(toUsd(10000, "USD"));
// console.log(toUsd(10000, "VND"));
// console.log(toUsd(10000, "Euro"));
