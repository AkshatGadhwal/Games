// JavaScript source code
function changeColor() {

    document.querySelector("body").style.background = document.querySelector("body").style.background === "purple" ? "white" : "purple";
};

var btn = document.querySelector("#colorSensor");
btn.addEventListener('click', changeColor);
