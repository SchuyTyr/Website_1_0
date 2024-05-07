/*-- wouldYouRather.js // Schuyler Meyer // 2024 --*/

let but1 = document.getElementById('wurBut1');
let but2 = document.getElementById('wurBut2');

let opt1, opt2;

let opt1Select = false;
let opt2Select = false;

//TODO: eventually make into separate file like a txt or json
let listOfRathers = [
    'eat pizza',
    'play baseball',
    'watch a movie',
    'go for a walk',
    'sleep'
];

// function to get random integer
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

// For on page load
function setWUR() {
    getOpt1();
    getOpt2();
    checkWUR();
    but1.innerHTML = opt1;
    but2.innerHTML = opt2;
}

// Button 1 press
function setWUR1() {
    opt1Select = true;
    opt2Select = false;
    getOpt2();
    checkWUR();
    but2.innerHTML = opt2;
}

// Button 2 press
function setWUR2() {
    opt1Select = false;
    opt2Select = true;
    getOpt1();
    checkWUR();
    but1.innerHTML = opt1;
}

function getOpt1() {
    opt1 = listOfRathers[getRandom(listOfRathers.length)];
    //console.log(opt1);
}
function getOpt2() {
    opt2 = listOfRathers[getRandom(listOfRathers.length)];
    //console.log(opt2);
}

function checkWUR() {

    while (opt1 === opt2) {

        if (opt1Select) {
            opt2 = listOfRathers[getRandom(listOfRathers.length)];
        }
        else {
            opt1 = listOfRathers[getRandom(listOfRathers.length)];
        }

        if (opt1 !== opt2) {
            break;
        }
    }

    //console.log(opt1 + ", " + opt2);
}

