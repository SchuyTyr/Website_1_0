/*-- photoScript.js // Schuyler Meyer // 2022-23 --*/

//import { EXIF } from "/src/js/exif-js/exif.js"; 

const modal = document.getElementById('myModal');
const images = document.querySelectorAll(".containerGrid img");
//let imagesCollection = document.getElementsByClassName("img4");
let imageList = [];
const body = document.getElementById('fullBody');
const html = document.documentElement;
let imageIndex = 0;
let currentImg;
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
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

function atLoad() {
    for (var p = 0; p < images.length; p++) {
        imageList.push({ image: images[p].src, id: p });
    }
}

images.forEach((img) => {

    img.addEventListener("click", (e) => {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        currentImg = e.target;
        imageIndex = imageList.findIndex(({ image }) => image === e.target.src);
        names(img);
    });
});

async function names(img) {

    await getExif(img);

    setTimeout(() => {

        if ((!imgTitle || imgTitle === "Untitled") && currentImg.title) {
            modalImg.title = currentImg.title;
            modalImg.alt = currentImg.title;
            modalImg.style.marginBottom = "24px";
            modalImgCapt.innerHTML = "<span>" + modalImg.title + "</span>";
        }
        else if (imgTitle && imgTitle !== "Untitled") {
            modalImgCapt.innerHTML = "<span>" + imgTitle + "</span>";
            modalImg.title = imgTitle;
            modalImg.alt = imgTitle;
            modalImg.style.marginBottom = "5px";
        }
        else {
            modalImgCapt.innerHTML = "";
            modalImg.title = "";
            modalImg.alt = "";
            modalImg.style.marginBottom = "24px";
        }

        //noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        modalOpen = true;

    }, 200);
}

window.addEventListener("click", function (event) {

    if (event.target === leftArrow) {
        ImagePrevious();
    }
    else if (event.target === rightArrow) {
        ImageAdvance();
    }
    else if ((event.currentTarget !== leftArrow || event.currentTarget !== rightArrow) && modalOpen) {
        modal.style.display = "none";
        //noScrollF();
        //html.style.overflow = "auto";
        topBtn = false;
        modalOpen = false;
        imgTitle = "";
    }

    toggleScroll();
});

//--Redundant with window event listener above--//
//--Uncomment if not using window event listener--// 
//close.onclick = function (event) {
//    if (modalOpen) {
//        modal.style.display = "none";
//        noScrollF();
//        //html.style.overflow = "revert";
//        //html.style.overflow = "auto";
//        topBtn = false;
//        modalOpen = false;
//        imgTitle = "";
//    }
//}

function toggleScroll() {
    if (modalOpen) {
        html.style.overflow = "hidden";
        //body.style.margin = "0"; //noScroll replacement - not needed?
        //body.style.height = "100%"; //noScroll replacement - not needed?
    }
    else if (!modalOpen) {
        html.style.overflowY = "scroll";
        html.style.overflowX = "hidden";
        //body.style.margin = "revert"; //noScroll replacement - not needed?
    }
}

function noScrollF() {
	body.classList.toggle('noscroll');
}


function ImageAdvance() {

    if (imageIndex >= images.length - 1) {
        imageIndex = 0;
    }
    else {
        imageIndex++;
    }

    modalImg.src = images[imageIndex].src;
    names(images[imageIndex]);
}

function ImagePrevious() {

    if (imageIndex <= 0) {
        imageIndex = images.length - 1;
    }
    else {
        imageIndex--;
    }

    modalImg.src = images[imageIndex].src;
    names(images[imageIndex]);
}