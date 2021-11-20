/*-- hideText.js // Schuyler Meyer // 2021 --*/

function hiddenTextFunc() {
  var x = document.getElementById("hiddenText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideLandFunc() {
  var land = document.getElementById("LandVid");
  var video = document.getElementById("LVid");
  var main = document.getElementsByClassName("fullContent");

  video.pause();
  video.muted;
  land.style.display = "none";

  for (var i = 0; i < main.length; i++) {
    main[i].style.display = "inherit";
  }
  //console.log("vid paused");
}

function toggleMute() {

  var video = document.getElementById("LVid");
  var mute = document.getElementById('tMute').innerHTML;

  video.muted = !video.muted;

  if (mute == '\ud83d\udd0a') {
    // No Sound
    //document.getElementById('tMute').innerHTML = '&#128264;&#xFE0E;';
    document.getElementById('tMute').innerHTML = '\ud83d\udd08'; //128264
    document.getElementById('tMute').title = 'No Sound';
  } else {
    // Sound
    //document.getElementById('tMute').innerHTML = '&#128266;&#xFE0E;';
    document.getElementById('tMute').innerHTML = '\ud83d\udd0a'; //128266
    document.getElementById('tMute').title = 'Sound';
  }

}


var vid = document.getElementById("LVid");
vid.addEventListener("timeupdate", function () {
  if(this.currentTime >= 5.5) {
    //this.pause();
    this.currentTime = 0.0;
    //setTimeout(vid.play, 5000); // Keep working on this
  }
  /*else {
    vid.play();
  }*/
});

//var currentStopTime = 4.95;
//var pauseLength = 2;
