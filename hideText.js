/*-- hideText.js // Schuyler Meyer // 2021, 2023, 2026 --*/

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


function viewMoreFunc() {
    var p = document.getElementById("viewMoreLink");

    var f = document.getElementsByClassName("hiddenFeatures");

    if (p.innerHTML === "View More") {
        p.innerHTML = "View Less";

    } else if (p.innerHTML === "View Less") {
        p.innerHTML = "View More";

    } else {
        p.innerHTML = "View More";
    }

    Array.from(f).forEach((h) => {
        if (h.style.display === "none") {
            h.style.display = "block";
        } else {
            h.style.display = "none";
        }
    })
}