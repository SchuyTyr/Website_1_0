/*-- photoScript.js // Schuyler Meyer // 2022-23 --*/

//import { EXIF } from "/src/js/exif-js/exif.js"; 

const modal = document.getElementById('myModal');
const images = document.querySelectorAll(".containerGrid img");
const body = document.getElementById('fullBody');
const html = document.documentElement;

//let imagesCollection = document.getElementsByClassName("img4");
let imageIndex = 0;
let curImgCounter = 0;
let imgEventCollection = [];
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

images.forEach((img) => {
    
    img.addEventListener("click", (e) => {

        modal.style.display = "block";
        modalImg.src = e.target.src;

        //imageIndex = curImgCounter;

        //imgCollection[curImgCounter] = img;

        imgEventCollection[curImgCounter] = e;

        names(img, e);

        console.log("img: " + img + ", e: " + e);
        console.log("imgEventCollection: " + imgEventCollection);
    });

    curImgCounter++;
});

async function names(img, e) {

    await getExif(img);

    setTimeout(() => {

        if ((!imgTitle || imgTitle === "Untitled") && e.target.title) {
            modalImg.title = e.target.title;
            modalImg.alt = e.target.title;
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

        noScrollF();
        scrollTop.style.display = "none";
        html.style.overflow = "hidden";
        topBtn = true;
        modalOpen = true;

    }, 500);
}

window.addEventListener("click", function (event) {
    //if (modalOpen) {

    if (event.target === leftArrow) {
        ImagePrevious();
    }
    else if (event.target === rightArrow) {
        ImageAdvance();
    }
    else if ((event.currentTarget !== leftArrow || event.currentTarget !== rightArrow) && modalOpen) {
        modal.style.display = "none";
        noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
        imgTitle = "";
    }
});

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

//document.getElementById("leftArrow").onclick = function (event) { ImagePrevious(); }
//document.getElementById("rightArrow").onclick = function (event) { ImageAdvance(); }

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
    //names(images[imageIndex], imgEventCollection[imageIndex]);
    console.log("img = " + images[imageIndex] + ", index = " + imageIndex + ", counter = " + curImgCounter);
}

function ImagePrevious() {

    if (imageIndex <= 0) {
        imageIndex = images.length - 1;
    }
    else {
        imageIndex--;
    }

    modalImg.src = images[imageIndex].src;
    names(images[imageIndex], imgEventCollection[imageIndex]);
    console.log("img = " + images[imageIndex] + ", index = " + imageIndex + ", counter = " + curImgCounter);
}