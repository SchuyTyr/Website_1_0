/*-- photoScript.js // Schuyler Meyer // 2022-23 --*/

//import { EXIF } from "/src/js/exif-js/exif.js"; 

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

var imgTitle = "";

function getExif(img) {

    EXIF.getData(img, function () {

        if (EXIF.getTag(this, "ImageDescription") !== "undefined") {

            imgTitle = EXIF.getTag(this, "ImageDescription");

        }

    });

}

images.forEach((img) => {
    img.addEventListener("click", (e) => {

        modal.style.display = "block";
        modalImg.src = e.target.src;

        names(img, e);

    });
});

async function names(img, e) {

    await getExif(img);

    setTimeout(() => {

        if ((!imgTitle || imgTitle === "Untitled") && e.target.title) {
            modalImg.title = e.target.title;
            modalImg.alt = e.target.title;
            modalImgCapt.innerHTML = "<span>" + modalImg.title + "</span>";
        }
        else if (imgTitle && imgTitle !== "Untitled") {
            modalImgCapt.innerHTML = "<span>" + imgTitle + "</span>";
            modalImg.title = imgTitle;
            modalImg.alt = imgTitle;
        }
        else {
            modalImgCapt.innerHTML = "";
            modalImg.title = "";
            modalImg.alt = "";
        }

        noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        modalOpen = true;

    }, 500);
}

window.onclick = function (event) {
    if (/*event.currentTarget == modal && */modalOpen) {
		modal.style.display = "none";
		noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
        imgTitle = "";
	}
}

close.onclick = function (event) {
    if (modalOpen) {
        modal.style.display = "none";
        noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
        imgTitle = "";
    }
}

function noScrollF() {
	body.classList.toggle('noscroll');
}


