/*-- wouldYouRather.js // Schuyler Meyer // 2024 --*/

let but1 = document.getElementById('wurBut1');
let but2 = document.getElementById('wurBut2');

let opt1, opt2, opt1Prev, opt2Prev;

let opt1Select = false;
let opt2Select = false;

//TODO: eventually make into separate file like a txt or json
let listOfRathers = [
    'only eat pizza with a fork and knife',
    'play baseball in >90\u00B0 weather',
    'play baseball in <40\u00B0 weather',
    'watch a 4 hour long movie',
    'watch a 30 minute long movie',
    'go for a walk on a muddy trail with sneakers',
    'go for a walk on a gravel trail with flip flops',
    'only be able to sleep for 10 hours everyday',
    'only be able to sleep for 6 hours everyday',
    'never taste sour',
    'only taste sweet',
    'be unable to see yellow',
    'be unable to see blue',
    'be unable to see red',
    'never be able to find what you are looking for in a room',
    'only be able to find things when you are not looking for them',
    'only be able slightly overcook everything',
    'only be able slightly undercook everything',
    'only be able to find tickets from resellers',
    'always feel slightly cold',
    'always feel slightly warm',
    'always have your drinks luke warm',
    'always forget someone\'s first name when talking to them',
    'always forget to cancel a trial subscription until after it has renewed',
    'always be an hour early',
    'always be 5 minutes late'
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
    but1.innerHTML = capitalizeFirstLetter(opt1);
    but2.innerHTML = capitalizeFirstLetter(opt2);
}

// Button 1 press
function setWUR1() {
    opt1Select = true;
    opt2Select = false;
    getOpt2();
    checkWUR();
    but2.innerHTML = capitalizeFirstLetter(opt2);
}

// Button 2 press
function setWUR2() {
    opt1Select = false;
    opt2Select = true;
    getOpt1();
    checkWUR();
    but1.innerHTML = capitalizeFirstLetter(opt1);
}

function getOpt1() {
    opt1Prev = opt1;
    opt1 = listOfRathers[getRandom(listOfRathers.length)];

    while (opt1Prev === opt1) {
        opt1 = listOfRathers[getRandom(listOfRathers.length)];

        if (opt1Prev !== opt1) {
            break;
        }
    }

}
function getOpt2() {
    opt2Prev = opt2;
    opt2 = listOfRathers[getRandom(listOfRathers.length)];

    while (opt2Prev === opt2) {
        opt2 = listOfRathers[getRandom(listOfRathers.length)];

        if (opt2Prev !== opt2) {
            break;
        }
    }
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

// Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

