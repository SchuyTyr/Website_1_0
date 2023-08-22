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

//var imgTitle = "Untitled";
var imgTitle = "";

//window.onload = getExif;

function getExif(img) {

    console.log("running.");

    EXIF.getData(img, function () {

        if (EXIF.getTag(this, "ImageDescription") !== "undefined") {

            imgTitle = EXIF.getTag(this, "ImageDescription");
            console.log("imgTitle1: " + imgTitle);
        }

    });

    console.log("ran.");

}

images.forEach((img) => {
    img.addEventListener("click", (e) => {

        console.log("----");

        modal.style.display = "block";
        modalImg.src = e.target.src;
        //modalImg.title = e.target.title;
        console.log("1- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title);

        names(img, e);

    });
});

async function names(img, e) {

    await getExif(img);

    setTimeout(() => {

        console.log("imgTitle: " + imgTitle);

        if ((!imgTitle || imgTitle === "Untitled") && e.target.title) {
            modalImg.title = e.target.title;
            modalImg.alt = e.target.title;
            modalImgCapt.innerHTML = "<span>" + modalImg.title + "</span>";
            console.log("2-1- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title + ", imgTitle: " + imgTitle);
        }
        else if (imgTitle && imgTitle !== "Untitled") {
            modalImgCapt.innerHTML = "<span>" + imgTitle + "</span>";
            modalImg.title = imgTitle;
            modalImg.alt = imgTitle;
            console.log("2-2- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title + ", imgTitle: " + imgTitle);
        }
        else {
            modalImgCapt.innerHTML = "";
            modalImg.title = "";
            modalImg.alt = "";
            console.log("2-3- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title + ", imgTitle: " + imgTitle);
        }

        noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        modalOpen = true;

    }, 500);
}

window.onclick = function (event) {
    if (event.target == modal && modalOpen) {
		modal.style.display = "none";
		noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
        //imgTitle = "Untitled";
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
        //imgTitle = "Untitled";
        imgTitle = "";
    }
}

function noScrollF() {
	body.classList.toggle('noscroll');
}


