/*-- colorPicker.js // Schuyler Meyer // 2024 --*/

let colorPicker;
const defaultColor = "#638aff";

//let bodyB = document.getElementById("bod");

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateFirst(event) {
    const bodyB = document.querySelector(".bod");
    if (bodyB) {
        bodyB.style.backgroundColor = event.target.value;
    }
}

function updateAll(event) {

    document.querySelectorAll(".bod").forEach((bod) => {
        bod.style.backgroundColor = event.target.value;
    });
    //bodyB.style.backgroundColor = event.target.value;
}