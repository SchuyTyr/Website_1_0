/*-- photoScript.js // Schuyler Meyer // 2022-25 --*/

//window.onload = function () {

    //import { EXIF } from "/src/js/exif-js/exif.js";

    const body = document.getElementById('fullBody');
    const html = document.documentElement;
    let modal /*= document.getElementById('myModal')*/;
    const images = document.querySelectorAll(".containerGrid img");
    //let imagesCollection = document.getElementsByClassName("img4");
    let imageList = [];
    let imageIndex = 0;
    let currentImg;
    let modalImg/* = document.getElementById("img01")*/;
    let modalImgCapt/* = document.getElementById("photoTextCapt")*/;
    /*var close = document.getElementById("closeButton");*/
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
            modal = document.getElementById('myModal');
            modalImg = document.getElementById("img01");
            modalImgCapt = document.getElementById("photoTextCapt");

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
                modalImg.style.marginBottom = "24px";
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

    window.addEventListener("keydown", ArrowClicked, false);
    window.addEventListener("click", ArrowClicked, false);

    let leftArrow = document.getElementById('leftArrow');
    let rightArrow = document.getElementById('rightArrow');
    let close = document.getElementById("closeButton");


    function ArrowClicked(event) {

        // Handle keyboard events
        if (event.type === "keydown") {
            if (event.keyCode === 37) { // Left arrow
                ImagePrevious();
                event.preventDefault();
                return;
            } else if (event.keyCode === 39) { // Right arrow
                ImageAdvance();
                event.preventDefault();
                return;
            } else if (event.keyCode === 27) { // Escape (optional: close modal)
                if (modalOpen) {
                    modal.style.display = "none";
                    topBtn = false;
                    modalOpen = false;
                    imgTitle = "";
                    toggleScroll();
                }
                return;
            } else {
                // Ignore all other keys
                return;
            }
        }
        // Handle mouse clicks
        else if (event.type === "click") { 

            if (event.target.closest && event.target.closest('#leftArrow')) {
                ImagePrevious();
                return;
            }
            else if (event.target.closest && event.target.closest('#rightArrow')) {
                ImageAdvance();
                return;
            }
            else if (modalOpen) {
                modal.style.display = "none";
                topBtn = false;
                modalOpen = false;
                imgTitle = "";
                toggleScroll();
                return;
            }

        }

    }

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

// necessary for js modal??
atLoad();

//}

