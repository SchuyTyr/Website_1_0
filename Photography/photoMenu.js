/*-- photoMenu.js // Schuyler Meyer // 2021 --*/

function openNav() {
  document.getElementById("mNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mNav").style.width = "0%";
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
