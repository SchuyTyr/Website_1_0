/*-- photoMenu.js // Schuyler Meyer // 2021 --*/

function openNav() {
  document.getElementById("mNav").style.width = "100%";
  var mybutton = document.getElementById("myBtn");
  // 3 following variables from photoScript.js and scrollToTop.js
  // Apparently they are global variables....
  //scrollTop.style.display = "none";
  mybutton.style.display = "none";
  topBtn = true;
  document.body.classList.toggle('noscroll');
}

function closeNav() {
  document.getElementById("mNav").style.width = "0%";
  topBtn = false;
  document.body.classList.toggle('noscroll');
}

// For video on homescreen

/*

var vid = document.getElementById("video");
var isStarted = false;

function openNav() {
  document.getElementById("mNav").style.width = "100%";
  vid.pause();
}

function closeNav() {
  document.getElementById("mNav").style.width = "0%";

  // Need to set it to true somewhere, currently it is never set to true.
  if (isStarted === true) {
    vid.play();
    isStarted = !isStarted;
  }
}

*/
