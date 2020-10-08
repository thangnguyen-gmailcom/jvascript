let img = document.getElementById("myImage");

function upArrowPressed() {
  let img = document.getElementById("myImage");
  img.style.top = parseInt(img.style.top) - 5 + "px";
}
function downArrowPressed() {
  let img = document.getElementById("myImage");
  img.style.top = parseInt(img.style.top) + 5 + "px";
}
function leftArrowPressed() {
  let img = document.getElementById("myImage");
  img.style.left = parseInt(img.style.left) - 5 + "px";
}
function rightArrowPressed() {
  let img = document.getElementById("myImage");
  img.style.left = parseInt(img.style.left) + 5 + "px";
}
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
}
function docReady() {
  window.addEventListener("keydown", moveSelection);
}
