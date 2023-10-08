/*-- entryType.js // Schuyler Meyer // 2023 --*/

//var bookFieldset = document.getElementById(bookFieldset);
//var movieFieldset = document.getElementById(movieFieldset);
//var musicFieldset = document.getElementById(musicFieldset);

function disableField() {

    //var mediaTypeForm = document.getElementById(mediaTypeForm);
    //var mediaTypeSelect = document.getElementById(mediaTypeSelect);

    var mediaType = document.forms["mediaTypeForm"]["mediaTypeSelect"].value;

    if (mediaType === "bookFieldset") {
        document.getElementById("bookFieldset").disabled = false;
        document.getElementById("movieFieldset").disabled = true;
        document.getElementById("musicFieldset").disabled = true;

    } else if (mediaType === "movieFieldset") {
        document.getElementById("bookFieldset").disabled = true;
        document.getElementById("movieFieldset").disabled = false;
        document.getElementById("musicFieldset").disabled = true;

    } else if (mediaType === "musicFieldset") {
        document.getElementById("bookFieldset").disabled = true;
        document.getElementById("movieFieldset").disabled = true;
        document.getElementById("musicFieldset").disabled = false;

    } else {
        document.getElementById("bookFieldset").disabled = true;
        document.getElementById("movieFieldset").disabled = true;
        document.getElementById("musicFieldset").disabled = true;
    }
}

document.getElementById("bookFieldset").disabled = true;
document.getElementById("movieFieldset").disabled = true;
document.getElementById("musicFieldset").disabled = true;