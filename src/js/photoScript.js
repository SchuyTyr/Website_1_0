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

var imgTitle = "Untitled";

//window.onload = getExif;

function getExif(img) {

    EXIF.getData(img, function () {

        if (EXIF.getTag(this, "ImageDescription") !== null) {

            imgTitle = EXIF.getTag(this, "ImageDescription");

        }

        console.log("imgTitle: " + imgTitle);

    });

}

images.forEach((img) => {
    img.addEventListener("click", (e) => {

        console.log("----");

        getExif(img);

		modal.style.display = "block";
        modalImg.src = e.target.src;
        //modalImg.title = e.target.title;
        console.log("1- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title);

        if ((imgTitle === "Untitled" || imgTitle === "undefined") && e.target.title !== "") {
            modalImg.title = e.target.title;
            modalImg.alt = e.target.title;
            modalImgCapt.innerHTML = "<span>" + modalImg.title + "</span>";
            console.log("2-1- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title);
        }
        else if (imgTitle !== "undefined" && imgTitle !== "Untitled" && imgTitle !== "") {
            modalImgCapt.innerHTML = "<span>" + imgTitle + "</span>";
            modalImg.title = imgTitle;
            modalImg.alt = imgTitle;
            console.log("2-2- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title);
        }
        else {
            modalImgCapt.innerHTML = "";
            modalImg.title = "";
            modalImg.alt = "";
            console.log("2-3- modalImg: " + modalImg.title + ", target: " + e.target.title + ", img.title: " + img.title);
        }



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
        imgTitle = "Untitled";
	}
}

close.onclick = function (event) {
    if (modalOpen) {
        modal.style.display = "none";
        noScrollF();
        html.style.overflow = "revert";
        topBtn = false;
        modalOpen = false;
        imgTitle = "Untitled";
    }
}

function noScrollF() {
	body.classList.toggle('noscroll');
}


