/*-- photoBeforeAfter.js // Schuyler Meyer // 2023 --*/


var divisor = document.getElementById("divisor"),
	slider = document.getElementById("slider"),
	divisor2 = document.getElementById("divisor2"),
	slider2 = document.getElementById("slider2");

function moveDivisor() {
	divisor.style.width = slider.value + "%";
}
function moveDivisor2() {
	divisor2.style.width = slider2.value + "%";
}