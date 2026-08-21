/*-- sportSlideShow.js // Schuyler Meyer // 2026 --*/

// 1. Get all .img4 images on the page (excluding the slideshow display image itself)
const slideshowImages = Array.from(document.querySelectorAll('img.img4'))
    .filter(img => img.id !== 'slideshowMain');
const slideshowMain = document.getElementById('slideshowMain');
const captionDiv = document.getElementById('slideCaption');

let isPlaying = true;
const playPauseBtn = document.getElementById('playPauseBtn');

let shuffledIndexes = [];
let slideshowIndex = 0;
let slideshowTimer = null;

//import { modalOpen } from './photoScript.js';

// Fisher-Yates shuffle
function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function resetShuffledIndexes() {
    shuffledIndexes = shuffle([...Array(slideshowImages.length).keys()]);
    slideshowIndex = 0;
}

function showSlideshowImage(index) {
    if (!slideshowImages.length) return;
    if (index >= shuffledIndexes.length) {
        resetShuffledIndexes();
        index = 0;
    }
    slideshowIndex = index;
    const img = slideshowImages[shuffledIndexes[slideshowIndex]];
    slideshowMain.src = img.src;
    slideshowMain.alt = img.alt || '';
    // Optionally set caption from title or alt
    if (captionDiv) {
        captionDiv.textContent = img.title || img.alt || '';
    }
}

function nextSlide(n) {
    let newIndex = slideshowIndex + n;
    if (newIndex < 0) newIndex = shuffledIndexes.length - 1;
    if (newIndex >= shuffledIndexes.length) {
        resetShuffledIndexes();
        newIndex = 0;
    }
    showSlideshowImage(newIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    // Remove default onclicks if present
    document.getElementById('leftArrow').onclick = function (e) {
        e.stopPropagation();
        nextSlide(-1);
        pauseSlideshow()
        if (isPlaying) resetTimer();
    };
    document.getElementById('rightArrow').onclick = function (e) {
        e.stopPropagation();
        nextSlide(1);
        pauseSlideshow()
        if (isPlaying) resetTimer();
    };

    resetShuffledIndexes();
    showSlideshowImage(0);
    startSlideshow();
});

window.addEventListener("keydown", ArrowDown, false);
window.addEventListener("click", ClickDown, false);

function ClickDown(event) {
    if (event.target.id !== 'playPauseBtn') {
        pauseSlideshow()
        event.preventDefault();
        if (isPlaying) resetTimer();
    }
}

function ArrowDown(event) {

    // Handle keyboard events
    // "modalOpen" = global variable from photoScript.js
    if (event.keyCode === 37 && modalOpen === false) { // Left arrow
        nextSlide(-1);
        event.preventDefault();
        pauseSlideshow()
        if (isPlaying) resetTimer();
        return;
    } else if (event.keyCode === 39 && modalOpen === false) { // Right arrow
        nextSlide(1);
        event.preventDefault();
        pauseSlideshow()
        if (isPlaying) resetTimer();
        return;
    } else {
        // Ignore all other keys
        return;
    }
    
} 

function startSlideshow() {
    clearInterval(slideshowTimer);
    slideshowTimer = setInterval(() => {
        nextSlide(1);
    }, 3000);
    isPlaying = true;
    if (playPauseBtn) {
        playPauseBtn.textContent = "Pause";
        playPauseBtn.title = "Pause Slideshow";
    }
}

function pauseSlideshow() {
    clearInterval(slideshowTimer);
    isPlaying = false;
    if (playPauseBtn) {
        playPauseBtn.textContent = "Play";
        playPauseBtn.title = "Play Slideshow";
    }
}

// Toggle play/pause on button click
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            pauseSlideshow();
        } else {
            startSlideshow();
        }
    });
}

function resetTimer() {
    clearInterval(slideshowTimer);
    startSlideshow();
}