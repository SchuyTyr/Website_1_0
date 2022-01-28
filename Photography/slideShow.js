/*-- slideShow.js // Schuyler Meyer // 2021 --*/

var myIndex = 0;
var slideCnt = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  var sc = document.getElementById("slideCounter");
  var slideTotal = 0;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideTotal = x.length;

  myIndex++;
  slideCnt++;

  if (myIndex > x.length) {
    myIndex = 1;
    slideCnt = 1;
  }

  sc.innerHTML = "&mdash;&nbsp;"+ slideCnt +"&nbsp;/&nbsp;"+ slideTotal +"&nbsp;&mdash;";

  x[myIndex-1].style.display = "block";
  //setTimeout(carousel, 6000); // Change image every 6 seconds
  //setInterval(carousel, 6000); // Change image every 6 seconds

}

function startTimer() {
  setInterval(carousel, 6000);
}
