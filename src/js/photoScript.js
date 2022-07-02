/*-- photoScript.js // Schuyler Meyer // 2022 --*/

const modal = document.getElementById('myModal');
const images = document.querySelectorAll(".containerGrid img");
const body = document.getElementById('fullBody');
const html = document.documentElement;

let modalImg = document.getElementById("img01");
let modalImgCapt = document.getElementById("photoTextCapt");

var close = document.getElementById("closeButton");

var scrollTop = document.getElementById("myBtn");
var noScroll = true;

images.forEach((img) => {
    img.addEventListener("click", (e) => {
				modal.style.display = "block";
        modalImg.src = e.target.src;
				modalImg.title = e.target.title;
				modalImgCapt.innerHTML = "<span>"+e.target.title+"</span>";
				noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        //console.log("no scroll?");
    });
});

window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			noScrollF();
      html.style.overflow = "revert";
      topBtn = false;
		}
}

close.onclick = function(event) {
		modal.style.display = "none";
		noScrollF();
    html.style.overflow = "revert";
    topBtn = false;
}

function noScrollF() {
		body.classList.toggle('noscroll');
}
