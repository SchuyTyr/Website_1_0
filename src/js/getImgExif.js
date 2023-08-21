/*-- getImgExif.js // Schuyler Meyer // 2023 --*/

//import * as EXIF from "exif.js"; 

window.onload = getExif;

async function getExif() {

    var img1 = document.getElementById("img01");
    //var imgs = document.getElementsByClassName("img4");

    //for (var y = 0; y < imgs.length; y++) {
    //    console.log("images: " + imgs[y].src);
    //}

    var imgTitle = "";

    EXIF.getData(img1, function () {

        imgTitle = EXIF.getTag(this, "ImageDescription");

        if (EXIF.getTag(this, "ImageDescription") != null) {
            img1.title = imgTitle;
            img1.alt = imgTitle;
        }
    });

    //console.log("img 1: " + imgs[0].title);

    //for (var i = 0; i < imgs.length; i++) {

    //    EXIF.getData(imgs[i], function () {

    //        imgTitle = EXIF.getTag(imgs[i], "ImageDescription");

    //        console.log(imgs[i] + ": " + imgTitle);

    //        imgs[i].setAttribute('title', imgTitle);
    //        imgs[i].setAttribute('alt', imgTitle);
    //        //imgs[i].title = imgTitle;
    //        //imgs[i].alt = imgTitle;

    //    });
    //}

}
