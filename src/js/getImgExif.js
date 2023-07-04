/*-- getImgExif.js // Schuyler Meyer // 2023 --*/

//import * as EXIF from "exif.js"; 

window.onload = getExif;

function getExif() {
    var img1 = document.getElementById("img1");
    EXIF.getData(img1, function () {
        var imgTitle = EXIF.getTag(this, "ImageDescription");

        img1.title = imgTitle;
    });
}
