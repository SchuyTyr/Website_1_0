/*-- typingText.js // Schuyler Meyer // 2022 --*/


const inst = new TypeIt("#typing", {
  //strings: ["Welcome to SchuyTyr Software!","Software"],
  speed: 125,
  deleteSpeed: 50,
  lifeLike: true,
  cursor: true,
  loopDelay: 1000,
  loop: false,
  afterComplete: function (instance) {
    document.getElementById('typing').title = "Click to Replay";
    document.getElementById('typing').style.cursor = "pointer";
    instance.destroy();
  }
})
  .type("Welcome to SchuyTyr Software!", { delay: 4000 })
  .delete()
  .type("Software:", { delay: 4000 })
  .go();



window.onload = function(){
  inst.go();
  typing();
};

function typing() {

    if(inst.is('started')){
      document.getElementById('typing').title = "Typing...";
      document.getElementById('typing').style.cursor = "default";
    }

};

function typingReset() {

    if(inst.is('completed')){
      inst.reset();
      inst.go();
      typing();
    }

};
