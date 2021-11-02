/*-- slideShow.js // Schuyler Meyer // 2021 --*/

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }

  x[myIndex-1].style.display = "block";
  //setTimeout(carousel, 6000); // Change image every 6 seconds
  //setInterval(carousel, 6000); // Change image every 6 seconds

}

function startTimer() {
  setInterval(carousel, 6000);
}
