let rate = {
  VND: 23000,
  USD: 1,
  Euro: 0.8,
};
let amounts = document.getElementById("amount");
let fromCurrency = document.getElementById("from");
let toCurrency = document.getElementById("to");
let resultDom = document.getElementById("demo");
function toUsd(amount, fromcurrency, tocurrency) {
  return (amount / rate[fromcurrency]) * rate[tocurrency];
}

function show() {
  let amount = amounts.value;
  let result = toUsd(amount, fromCurrency.value, toCurrency.value);
  resultDom.innerText = `Result:${result} ${toCurrency.value}`;
}
