/*const time = Math.random() + .5;
// I’m adding .5 here so the flicker isn’t too obnoxious

console.log(time);

const roundedLine = document.querySelector('.rounded');
const roundedTwoLine = document.querySelector('.roundedTwo');
roundedLine.style.setProperty('--animation-time', time +'s');
roundedTwoLine.style.setProperty('--animation-time', time +'s');

*/

const roundedLine = document.querySelector('.rounded');
const roundedTwoLine = document.querySelector('.roundedTwo');

function setProperty(duration) {
  roundedLine.style.setProperty('--animation-time', duration +'s');
  roundedTwoLine.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime() {
  const animationDuration = Math.random();
  setProperty(animationDuration);
}

setInterval(changeAnimationTime, 1000);

/*console.log(animationDuration);*/
