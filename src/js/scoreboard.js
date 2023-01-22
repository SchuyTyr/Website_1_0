// scoreboard.js | Schuyler Meyer | 2023 //


// -----------------------------------------------------------------------------------------------------

var team1score = document.getElementById('team1score');
var team2score = document.getElementById('team2score');
var team1shots = document.getElementById('team1shots');
var team2shots = document.getElementById('team2shots');

var inc1score = document.getElementById('inc1score');
var inc2score = document.getElementById('inc2score');
var inc1shots = document.getElementById('inc1shots');
var inc2shots = document.getElementById('inc2shots');

var tm1score = team1score.textContent;
var tm2score = team2score.textContent;
var tm1shots = team1shots.textContent;
var tm2shots = team2shots.textContent;

var per1box = document.getElementById('per1');
var per2box = document.getElementById('per2');
var per3box = document.getElementById('per3');
var perCount = 0;

document.getElementById('buttons')
  .addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {return}
    else if (e.target.id === "inc1score") {
      tm1score = team1score.textContent;
      plusOne(team1score, tm1score);

      tm1shots = team1shots.textContent;
      plusOne(team1shots, tm1shots);
    }
    else if (e.target.id === "inc2score") {
      tm2score = team2score.textContent;
      plusOne(team2score, tm2score);

      tm2shots = team2shots.textContent;
      plusOne(team2shots, tm2shots);
    }
    else if (e.target.id === "inc1shots") {
      tm1shots = team1shots.textContent;
      plusOne(team1shots, tm1shots);
    }
    else if (e.target.id === "inc2shots") {
      tm2shots = team2shots.textContent;
      plusOne(team2shots, tm2shots);
    }
    else if (e.target.id === "reset") {
      tm1score = 0;
      tm2score = 0;
      tm1shots = 0;
      tm2shots = 0;

      team1score.textContent = tm1score.toString();
      team2score.textContent = tm2score.toString();
      team1shots.textContent = tm1shots.toString();
      team2shots.textContent = tm2shots.toString();
    }
    /*else if (e.target.id === "startTime") {
      var twentyMinutes = 60 * 20,
          display = document.querySelector('#time');
      startTimer(twentyMinutes, display);

      timer.start();
    }
    else if (e.target.id === "stopTime") {

    }
    else if (e.target.id === "resetTime") {

    }*/
    else if (e.target.id === "period") {
      if (perCount == 0) {
        per1box.style.backgroundColor = 'rgba(255, 0, 0, 0.65)';
        perCount++;
      }
      else if (perCount == 1) {
        per2box.style.backgroundColor = 'rgba(255, 0, 0, 0.65)';
        perCount++;
      }
      else if (perCount == 2) {
        per3box.style.backgroundColor = 'rgba(255, 0, 0, 0.65)';
        perCount++;
      }
      else if (perCount > 2 || perCount < 0) {
        per1box.style.backgroundColor = 'rgba(20,20,20,0.5)';
        per2box.style.backgroundColor = 'rgba(20,20,20,0.5)';
        per3box.style.backgroundColor = 'rgba(20,20,20,0.5)';
        perCount = 0;
      }
    }
    else (
      console.log(e.target.id)
    )
  });

// -----------------------------------------------------------------------------------------------------

function plusOne(htmlNum, jsNum) {
  jsNum++;
  htmlNum.textContent = jsNum.toString();

  console.log(jsNum);
  return jsNum;
}

// -----------------------------------------------------------------------------------------------------
/*
window.onload = function () {
    var display = document.querySelector('#time'),
        timer = new CountDownTimer(20),
        timeObj = CountDownTimer.parse(20);

    format(timeObj.minutes, timeObj.seconds);

    timer.onTick(format);

    document.querySelector('button').addEventListener('click', function () {
        timer.start();
    });

    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
};*/

window.onload = () => {
  let hour = 0;
  let minutes = 20;
  let seconds = 00;
  let totalSeconds = 1200;

  let intervalId = null;

  function startTimer() {
    --totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minutes = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minutes*60);

    //document.getElementById("hour").innerHTML =hour;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  document.getElementById('startTime').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
  })

  document.getElementById('stopTime').addEventListener('click', () => {
    if (intervalId)
      clearInterval(intervalId);
  });


  document.getElementById('resetTime').addEventListener('click', () => {
     totalSeconds = 1200;
     //document.getElementById("hour").innerHTML = '0';
     document.getElementById("minutes").textContent = '20';
     document.getElementById("seconds").textContent = '00';
  });
}
