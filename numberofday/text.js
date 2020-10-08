let numberOfMonth = document.getElementById("number");
let resultDom = document.getElementById("demo");

function numberOfDays() {
  let day;
  let number = Number(numberOfMonth.value);
  switch (number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = "31 ngày";
      break;
    case 2:
      day = "28 hoặc 29 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = "30 ngày";
  }
  resultDom.innerHTML = `Tháng ${number} có ${day}`;
}
