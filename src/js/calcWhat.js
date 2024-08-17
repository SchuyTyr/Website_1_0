//-- calcWhat.js // Schuyler Meyer - 2024 --//

let resultText = document.getElementById("result");

let equalMax = 100;
let randomEqual = 0;
let randoEquate = 0;

document.getElementById("equalSign").onclick = function () {
	randoEquate = Math.floor(Math.random() * 10);
	console.log(randoEquate);

	if (randoEquate >= 8) {
		randomEqual = Math.floor(Math.random() * equalMax);
		resultText.value = randomEqual;
	} else {
		let actualVal = resultText.value;
		let realMath = math.evaluate(actualVal)
		resultText.value = realMath;
	}
};

document.getElementById("cButton").onclick = function () {
	resultText.value = "";
};
document.getElementById("bButton").onclick = function () {
	if (resultText.value === "ERROR") {
		//resultText.value = "ERROR";
	}
	else {
		resultText.value = resultText.value.slice(0, -1);
	}
};

document.getElementById("calcOne").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "1";
	}
	else {
		resultText.value = resultText.value + "1";
	}
};

document.getElementById("calcTwo").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "2";
	}
	else {
		resultText.value = resultText.value + "2";
	}
};

document.getElementById("calcThree").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "3";
	}
	else {
		resultText.value = resultText.value + "3";
	}
};

document.getElementById("calcFour").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "4";
	}
	else {
		resultText.value = resultText.value + "4";
	}
};

document.getElementById("calcFive").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "5";
	}
	else {
		resultText.value = resultText.value + "5";
	}
};

document.getElementById("calcSix").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "6";
	}
	else {
		resultText.value = resultText.value + "6";
	}
};

document.getElementById("calcSeven").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "7";
	}
	else {
		resultText.value = resultText.value + "7";
	}
};

document.getElementById("calcEight").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "8";
	}
	else {
		resultText.value = resultText.value + "8";
	}
};

document.getElementById("calcNine").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "9";
	}
	else {
		resultText.value = resultText.value + "9";
	}
};

document.getElementById("calcZero").onclick = function () {
	if (resultText.value === "ERROR") {
		resultText.value = "0";
	}
	else {
		resultText.value = resultText.value + "0";
	}
};

document.getElementById("calcPlus").onclick = function () {
	if (resultText.value === "ERROR") {
		//resultText.value = "ERROR";
	}
	else if (resultText.value.charAt(resultText.value.length - 1) === "+" ||
		resultText.value.charAt(resultText.value.length - 1) === "-" ||
		resultText.value.charAt(resultText.value.length - 1) === "*" ||
		resultText.value.charAt(resultText.value.length - 1) === "/" ||
		resultText.value.charAt(resultText.value.length - 1) === "." ||
		resultText.value.charAt(resultText.value.length - 1) === "") {
		resultText.value = "ERROR";
	}
	else {
		resultText.value = resultText.value + "+";
	}
};

document.getElementById("calcSub").onclick = function () {
	if (resultText.value === "ERROR") {
		//resultText.value = "ERROR";
	}
	else if (resultText.value.charAt(resultText.value.length - 1) === "+" ||
		resultText.value.charAt(resultText.value.length - 1) === "-" ||
		resultText.value.charAt(resultText.value.length - 1) === "*" ||
		resultText.value.charAt(resultText.value.length - 1) === "/" ||
		resultText.value.charAt(resultText.value.length - 1) === ".") {
		resultText.value = "ERROR";
	}
	else {
		resultText.value = resultText.value + "-";
	}
};

document.getElementById("calcTimes").onclick = function () {
	if (resultText.value === "ERROR") {
		//resultText.value = "ERROR";
	}
	else if (resultText.value.charAt(resultText.value.length - 1) === "+" ||
		resultText.value.charAt(resultText.value.length - 1) === "-" ||
		resultText.value.charAt(resultText.value.length - 1) === "*" ||
		resultText.value.charAt(resultText.value.length - 1) === "/" ||
		resultText.value.charAt(resultText.value.length - 1) === "." ||
		resultText.value.charAt(resultText.value.length - 1) === "") {
		resultText.value = "ERROR";
	}
	else {
		resultText.value = resultText.value + "*";
	}
};

document.getElementById("calcDiv").onclick = function () {
	if (resultText.value === "ERROR") {
		//resultText.value = "ERROR";
	}
	else if (resultText.value.charAt(resultText.value.length - 1) === "+" ||
		resultText.value.charAt(resultText.value.length - 1) === "-" ||
		resultText.value.charAt(resultText.value.length - 1) === "*" ||
		resultText.value.charAt(resultText.value.length - 1) === "/" ||
		resultText.value.charAt(resultText.value.length - 1) === "." ||
		resultText.value.charAt(resultText.value.length - 1) === "") {
		resultText.value = "ERROR";
	}
	else {
		resultText.value = resultText.value + "/";
	}
};

document.getElementById("calcDec").onclick = function () {
	if (resultText.value === "ERROR") {
		//resultText.value = "ERROR";
	}
	else if (resultText.value.charAt(resultText.value.length - 1) === ".") {
		resultText.value = "ERROR";
	}
	else {
		resultText.value = resultText.value + ".";
	}
};
