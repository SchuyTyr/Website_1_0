/*-- getImgExif.js // Schuyler Meyer // 2023 --*/

//import * as EXIF from "exif.js"; 

window.onload = getExif;

function getExif() {

    //var img1 = document.getElementById("img1");
    var imgs = document.getElementsByClassName("img4");
    console.log("images: " + imgs.length);

    //EXIF.getData(img1, function () {
    //    var imgTitle = EXIF.getTag(this, "ImageDescription");

    //    //img1.crossOrigin = "use-credentials";
    //    img1.title = imgTitle;
    //    img1.alt = imgTitle;
    //});

    for (var i = 0; i < imgs.length; i++) {

        EXIF.getData(imgs[i], function () {

            var imgTitle = EXIF.getTag(imgs[i], "ImageDescription");

            console.log(imgs[i] + ": " + imgTitle);

            imgs[i].setAttribute('title', imgTitle);
            imgs[i].setAttribute('alt', imgTitle);
            //imgs[i].title = imgTitle;
            //imgs[i].alt = imgTitle;

        });
    }

}
