/*-- hideText.js // Schuyler Meyer // 2021, 2023 --*/

function hiddenTextFunc() {
    var x = document.getElementById("hiddenText");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function readMoreFunc() {
    var x = document.getElementById("readMore");
    var y = document.getElementById("readMoreLink");
    if (x.style.display === "none") {
        y.innerHTML = "Read Less";
        x.style.display = "block";
    } else {
        y.innerHTML = "Read More";
        x.style.display = "none";
    }
}
