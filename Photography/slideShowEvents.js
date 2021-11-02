/*-- showSlidesEvents.js // Schuyler Meyer // 2021 --*/


  /* Find all slideshow containers */
  var slideshowContainers = document.getElementsByClassName("slideshow-container");
  /* For each container get starting variables */
  for(let s = 0; s < slideshowContainers.length; s++) {
      /* Read the new data attribute */
      var cycle = 6000;
      /* Find all the child nodes with class slides */
      var slidesEvent = slideshowContainers[s].querySelectorAll('.slidesEvent');
      var slideIndex = 0;
      /* Now we can cycle slides, but this recursive function must have parameters */
      /* slides and cycle never change, those are unique for each slide container */
      /* slideIndex will increase during each iteration */
      showSlides(slidesEvent, slideIndex, cycle);
  };

  /* Function is alsmost same, but now it uses 3 new parameters */
  function showSlides(slidesEvent, slideIndex, cycle) {
      for (i = 0; i < slidesEvent.length; i++) {
          slidesEvent[i].style.display = "none";
      };
      slideIndex++;
      if (slideIndex > slidesEvent.length) {
          slideIndex = 1
      };
      slidesEvent[slideIndex - 1].style.display = "block";
      /* Calling same function, but with new parameters and cycle time */
      setTimeout(function() {
          showSlides(slidesEvent, slideIndex, cycle)
      }, cycle);
  };
