/*-- photoMenu.js // Schuyler Meyer // 2021 --*/

function openNav() {
    document.getElementById("mNav").style.width = "100%";
    var mybutton = document.getElementById("myBtn");
    // 3 following variables from photoScript.js and scrollToTop.js
    // Apparently they are global variables....
    //scrollTop.style.display = "none";
    mybutton.style.display = "none";
    topBtn = true;
    document.documentElement.classList.toggle('noscroll');
  //document.body.classList.toggle('noscroll');
}

function closeNav() {
    document.getElementById("mNav").style.width = "0%";
    topBtn = false;
    document.documentElement.classList.toggle('noscroll');
    //document.body.classList.toggle('noscroll');
}

//function myModal() {
//    let myMod = document.getElementById('myModal');

//    myMod.innerHTML = `
//        <div class="modalPhoto">
//		    <div id="photoText">Click the "x" or anywhere outside the image to close.</div>
//		        <img class="modalPhotoContent" id="img01" title="">
//		    <div id="photoTextCapt"></div>
//		    <input type="button" id="closeButton" value="&times;" title="Close">
//	    </div>
//    `;

//    console.log("modal set?");
//}

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
