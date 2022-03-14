/*-- scrollToTop.js // Schuyler Meyer // 2021 --*/

//Get the button
var mybutton = document.getElementById("myBtn");

var topBtn = false;

// When the user scrolls down 225px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
    if (!topBtn){
     mybutton.style.display = "block";
    }
  } else {
    if (!topBtn){
     mybutton.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  /*document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;*/
  window.scrollTo({
    top: 0, behavior: 'smooth'
  });
}
