/*-- automation.js // Schuyler Meyer // 2023 --*/

let timerID;
let timerIDRecharge;

let energyLevel = 100;
const energyUnit = 1;
const timeUnit = 1;
let timeDelay = 5000;

const breakCheckMax = 100;
let breakCheckNum = 999;

let inMaintenance = false; // boolean
let inTask = false; // boolean
let inStandby = true; // boolean
let inRecharge = false; // boolean

let currentTaskState;
let currentTask = [
    'in Maintenance',
    'in Task',
    'in Standby',
    'in Recharge'
];

let currentInTask;
let currentInMaintenance;
let currentInRecharge;

let isNormal = false; // boolean
let inRepair = false; // boolean
let isBroken = false; // boolean


let anatomy = [
    'Head',
    'Left Eye',
    'Right Eye',
    'Left Arm',
    'Right Arm',
    'Body',
    'Software',
    'Sensors'
];

let brokenComponent = 'zzz';

let taskMaintenance = [
    'Gather',
    'Repair',
    'Build'
]
let taskRecharge = 'Recharge';
let taskGeneral = [
    'Researching',
    'Building',
    'Repairing Surroundings',
    'Getting Distracted',
    'Flying'
]

//--------------------------------

let currentBrokenText = document.getElementById("currentBroken");
let currentlyText = document.getElementById("currently");
let startStopText = document.getElementById("startStop");
let beginEndText = document.getElementById("beginEnd");
let imgVid = document.getElementById("visualDisplay");
let vdIMG = document.getElementById("vdIMG");
let vdVID = document.getElementById("vdVID");

//--------------------------------

// Timer
function timeMaster() {
    timerID = setTimeout(taskMaster, timeDelay);
}

function currentState() {
    if (!inTask && !inMaintenance && !inRecharge) {
        inStandby = true;
        currentTaskState = currentTask[2];
    }
    else if (!inTask && !inStandby && !inRecharge) {
        inMaintenance = true;
        currentTaskState = currentTask[0];
    }
    else if (!inTask && !inMaintenance && !inStandby) {
        inRecharge = true;
        currentTaskState = currentTask[3];
    }
    else {
        inTask = true;
        currentTaskState = currentTask[1];
    }

    //console.log("inStandby: " + inStandby + "\n" + "inMaintenance: " + inMaintenance + "\n" + "inTask: " + inTask + "\n" + "inRecharge: " + inRecharge);
    console.log("Current State: " + currentTaskState);
    //currentStateText.innerHTML = "Current State: " + currentTaskState;

    return currentTaskState;
}

// function to task
function taskMaster() {

    console.log("EnergyLevel = " + energyLevel);
    showBatteryLevel(energyLevel);
    checkEnergyLevel();
    breakdownCheck();
    currentState();
    displayTask(currentTaskState);
    giveTask();

    console.log("-----------------" + "td: " + timeDelay + "------------------");

    // uncomment to loop continuously //
    timerID = setTimeout(taskMaster, timeDelay);
}

function giveTask() {

    if (inStandby) {
        inMaintenance = false;
        inTask = true;
        inStandby = false;
        console.log("Currently in Standby.");
        currentlyText.innerHTML = "<span class='currSpan'>Currently in Standby.<br></span><br>";
        energyLevel -= energyUnit;
        timeDelay = 5000;
    }
    else if (inTask) {
        currentInTask = taskGeneral[(Math.floor(Math.random() * taskGeneral.length))];
        console.log("Currently working on: " + currentInTask);
        currentlyText.innerHTML = "<span class='currSpan'>Currently working on:</span>" + "<br>" + currentInTask;
        energyLevel -= energyUnit * 4;
        timeDelay = 5000;
    }
    else if (inRecharge) {
        currentTaskState = currentTask[3];
        currentInRecharge = taskRecharge;
        console.log("Currently recharging.");
        currentlyText.innerHTML = "<span class='currSpan'>Currently recharging.<br></span><br>";
        Recharge();
    }
    else if (inMaintenance) {
        console.log("Currently repairing: " + brokenComponent);
        currentlyText.innerHTML = "<span class='currSpan'>Currently repairing:</span>" + "<br>" + brokenComponent;
        energyLevel -= energyUnit * 8;
        timeDelay = 8000;
        inMaintenance = false;
        inTask = false;
        inStandby = true;
        inRecharge = false;
    }
}

// function to check energy level
function checkEnergyLevel() {

    if (energyLevel < 25) {
        inMaintenance = false;
        inTask = false;
        inStandby = false;
        inRecharge = true;
    }
}

// function to recharge the battery
function Recharge() {

    console.log("EnergyLevel = " + energyLevel);
    
    if (energyLevel < 100 && energyLevel >= 0) {
        inTask = false;
        energyLevel += energyUnit;
        Recharge();
    }
    else if (energyLevel < 0) {
        energyLevel = 0;
    }
    else if (energyLevel > 100) {
        energyLevel = 100;
    }
    else {
        inMaintenance = false;
        inTask = false;
        inStandby = true;
        inRecharge = false;
        timeDelay = 10000;
    }
}

// function to display gif / video / image
function displayTask(currentTaskState) {

    switch (currentTaskState) {
        case currentTask[0]: // in Maintenance
            vdIMG.style.display = "block";
            vdVID.style.display = "none";
            vdIMG.src = "src/img/automation.jpg";
            vdVID.pause();
            break;
        case currentTask[1]: // in Task
            vdIMG.style.display = "none";
            vdVID.style.display = "block";
            vdVID.src = "src/vid/auto_research.mp4";
            vdVID.play();
            break;
        case currentTask[2]: // in Standby
            vdIMG.style.display = "block";
            vdVID.style.display = "none";
            vdIMG.src = "src/img/automation.jpg";
            vdVID.pause();
            break;
        case currentTask[3]: // in Recharge
            vdIMG.style.display = "none";
            vdVID.style.display = "block";
            vdVID.src = "src/vid/auto_recharge.mp4";
            vdVID.play();
            break;
        default:
            vdIMG.style.display = "block";
            vdVID.style.display = "none";
            vdIMG.src = "src/img/automation.jpg";
            vdVID.pause();
            break;
    }
}

// function to check if broken happens
function breakdownCheck() {

    breakCheckNum = getRandomInt(breakCheckMax);

    if (breakCheckNum < 5) {
        isBroken = true;
        inMaintenance = true;
        inTask = false;
        inStandby = false;
        inRecharge = false;
        brokenComponent = anatomy[(Math.floor(Math.random() * anatomy.length))];
        console.log(brokenComponent + " is broken.");
        currentBrokenText.innerHTML = brokenComponent + " is broken.";
        currentBrokenText.style.color = "darkorange";
    }
    else {
        isBroken = false;
        currentBrokenText.innerHTML = "All systems nominal.";
        currentBrokenText.style.color = "#848484";
    }

    //console.log("breakCheckNum = " + breakCheckNum + ", isBroken = " + isBroken);
}

// function to get random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//--------------------------------

let startStop = function () {
    if (timerID != null) {
        stop();
    } else {
        //timerID = setTimeout(taskMaster, timeDelay);
        taskMaster();
    }
    change();
}

let change = function () {
    var elem = document.getElementById("startButton");
    if (elem.value == "Stop") {
        elem.value = "Start";
        startStopText.innerHTML = "'start'";
        beginEndText.innerHTML = "begin";
    }
    else {
        elem.value = "Stop";
        startStopText.innerHTML = "'stop'";
        beginEndText.innerHTML = "pause";
    }
}

let stop = function () {
        clearTimeout(timerID);
        timerID = null;
}

// Add reset button?

// function to display battery level
function showBatteryLevel(energyLevel) {

    let chargeToggle = document.getElementsByClassName('bbar');
    let index = 0;

    for (var j = 0; j < chargeToggle.length; j++) {

        let chargeIndex = Math.round(energyLevel / 10);

        if (index != chargeIndex) {
            chargeToggle[j].classList.add("active");

            if (energyLevel > 60) {
                chargeToggle[j].style.background = "var(--main_button_green_color)";
            }
            else if (energyLevel <= 60 && energyLevel > 25) {
                chargeToggle[j].style.background = "#ffd600";
            }
            else if (energyLevel <= 25) {
                chargeToggle[j].style.background = "#c90000";
            }

            index++;
        } else {
            chargeToggle[j].classList.remove("active");
            chargeToggle[j].style.background = "transparent";
        }
    }

}