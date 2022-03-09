/*-- hideText.js // Schuyler Meyer // 2021 --*/

function hiddenTextFunc() {
    var x = document.getElementById("hiddenText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
