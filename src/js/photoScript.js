/*-- photoScript.js // Schuyler Meyer // 2022 --*/

const modal = document.getElementById('myModal');
const images = document.querySelectorAll(".containerGrid img");
const body = document.getElementById('fullBody');

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
        topBtn = true;
    });
});

window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			noScrollF();
      topBtn = false;
		}
}

close.onclick = function(event) {
		modal.style.display = "none";
		noScrollF();
    topBtn = false;
}

function noScrollF() {
		body.classList.toggle('noscroll');
}
