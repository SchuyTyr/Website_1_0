/*-- photoScript.js // Schuyler Meyer // 2022-23 --*/

const modal = document.getElementById('myModal');
const images = document.querySelectorAll(".containerGrid img");
const body = document.getElementById('fullBody');
const html = document.documentElement;

let modalImg = document.getElementById("img01");
let modalImgCapt = document.getElementById("photoTextCapt");

var close = document.getElementById("closeButton");

var scrollTop = document.getElementById("myBtn");
var noScroll = true;

var modalOpen = false;

images.forEach((img) => {
    img.addEventListener("click", (e) => {

		modal.style.display = "block";
        modalImg.src = e.target.src;
        modalImg.title = e.target.title;
        getExif(img);
		/*modalImgCapt.innerHTML = "<span>"+e.target.title+"</span>";*/
		noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        modalOpen = true;
        //console.log("no scroll?");

    });
});

window.onclick = function (event) {
    if (event.target == modal && modalOpen) {
		modal.style.display = "none";
		noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
	}
}

close.onclick = function (event) {
    if (modalOpen) {
        modal.style.display = "none";
        noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
    }
}

function noScrollF() {
	body.classList.toggle('noscroll');
}

function getExif(img) {

    var imgTitle = "";

    EXIF.getData(img, function () {

        //if (EXIF.getTag(this, "ImageDescription") != null) {
            imgTitle = EXIF.getTag(this, "ImageDescription");
            console.log("imgTitle: " + imgTitle);

            modalImgCapt.innerHTML = "<span>" + imgTitle + "</span>";
            modalImg.title = imgTitle;
            modalImg.alt = imgTitle;
        //}
    });

}

