let imgObj = document.getElementById("image");
function init() {
  imgObj = document.getElementById("image");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
}
function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}
function moveLeft() {
  imgObj.style.left = parseInt(imgObj.style.left) - 10 + "px";
}
window.onload = init;
