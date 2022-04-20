/*-- fadeScroll.js // Schuyler Meyer // 2022 --*/

if ('IntersectionObserver' in window){

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    };

    function observerCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace('fadeOut', 'fadeIn');
        } else {
          // fade out observed elements that are not in view
          entry.target.classList.replace('fadeIn', 'fadeOut');
        }
      });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const fadeElms = document.querySelectorAll('.fadeScroll');
    fadeElms.forEach(el => observer.observe(el));



} else {
    var objects = document.getElementsByClassName('fadeOut');

    for (i = 0; i < objects.length; i++){
      objects[i].style.opacity = "0";
    }
}
