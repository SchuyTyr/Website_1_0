/*-- showSlidesEvents.js // Schuyler Meyer // 2021,2023 --*/

//var timers = [];
//var timer;
var slideIndex = 0;
//var cycle = 6000;
var slides;
//var slideshowContainers = document.getElementsByClassName("slideshow-container");

var slides1 = document.getElementById("VintageBaseBall");
slides1.currentSlideIndex = 1;
showSlides(slides1.currentSlideIndex, slides1);

var slides2 = document.getElementById("COGO");
slides2.currentSlideIndex = 1;
showSlides(slides2.currentSlideIndex, slides2);

var slides3 = document.getElementById("SLUvsSKorea");
slides3.currentSlideIndex = 1;
showSlides(slides3.currentSlideIndex, slides3);

var slides4 = document.getElementById("CUGrad");
slides4.currentSlideIndex = 1;
showSlides(slides4.currentSlideIndex, slides4);

var slides5 = document.getElementById("CUROTC");
slides5.currentSlideIndex = 1;
showSlides(slides5.currentSlideIndex, slides5);

var slides6 = document.getElementById("TCSGrad");
slides6.currentSlideIndex = 1;
showSlides(slides6.currentSlideIndex, slides6);

var slides7 = document.getElementById("TEDx");
slides7.currentSlideIndex = 1;
showSlides(slides7.currentSlideIndex, slides7);

var slides8 = document.getElementById("PotsdamPride");
slides8.currentSlideIndex = 1;
showSlides(slides8.currentSlideIndex, slides8);

var slides9 = document.getElementById("MillbrookLitFest");
slides9.currentSlideIndex = 1;
showSlides(slides9.currentSlideIndex, slides9);

var slides10 = document.getElementById("CUGI");
slides10.currentSlideIndex = 1;
showSlides(slides10.currentSlideIndex, slides10);

var slides11 = document.getElementById("VerminSupreme");
slides11.currentSlideIndex = 1;
showSlides(slides11.currentSlideIndex, slides11);

function plusSlides(n, slideshow) {
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {

    var i;
    slides = slideshow.getElementsByClassName("slidesEvent");
    //n = slideIndex;

    //clearTimeout(timer);

    if (n > slides.length) {
        slideshow.currentSlideIndex = 1
    }
    if (n < 1) {
        slideshow.currentSlideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideshow.currentSlideIndex - 1].style.display = "block";

    //slideIndex = n;

    //showSlidesTimer(slides, slideIndex, cycle);

}

//---------------------------

///* For each container get starting variables */
//for (let s = 0; s < slideshowContainers.length; s++) {

//    showSlidesTimer(slides, slideIndex, cycle);
//}

///* Function is alsmost same, but now it uses 3 new parameters */
//function showSlidesTimer(slides, slideIndex, cycle) {
//    for (let t = 0; t < slides.length; t++) {
//        slides[t].style.display = "none";
//    }

//    slideIndex++;

//    if (slideIndex > slides.length) {
//        slideIndex = 1
//    }

//    slides[slideIndex - 1].style.display = "block";

//    /* Calling same function, but with new parameters and cycle time */
//    timer = setTimeout(function () {
//        showSlidesTimer(slides, slideIndex, cycle)
//    }, cycle);
//}
