/*-- wordsearch-flat.js // Schuyler Meyer // 2022 --*/

// Changed "let" to "var" for older phone browsers (ES5 - ES6)


const dictURL = "https://www.schuylermeyer.com/src/files/english.txt";
const dictPath = './../files/english.txt';


var wordList = [];
var setList = [];
//var wordLength = '';
var startLetter = '';
var secondLetter = '';
var thirdLetter = '';
var fourthLetter = '';
var endLetter = '';
var anyLetter = '';
var excLetter = '';
var fullLetter = '';

var anyLetterAll = [];
var excWords = [];

var tb1 = document.getElementById("textbox1");
var tb2 = document.getElementById("textbox2");
var tb3 = document.getElementById("textbox3");
var tb4 = document.getElementById("textbox4");
var tb5 = document.getElementById("textbox5");
var tb6 = document.getElementById("textbox6");
var tb7 = document.getElementById("textbox7");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");


submit.addEventListener("click", function () {

    var output = document.getElementById("output");

    // not ideal to use innerHTML, but until I find something else that works...
    output.innerHTML = '';

    var startLetter = tb1.value;
    var secondLetter = tb2.value;
    var thirdLetter = tb3.value;
    var fourthLetter = tb4.value;
    var endLetter = tb5.value;
    var anyLetter = tb6.value;
    var excLetter = tb7.value;

    startLetter = startLetter === '' ? '*' : startLetter;
    secondLetter = secondLetter === '' ? '*' : secondLetter;
    thirdLetter = thirdLetter === '' ? '*' : thirdLetter;
    fourthLetter = fourthLetter === '' ? '*' : fourthLetter;
    endLetter = endLetter === '' ? '*' : endLetter;

    if (excLetter === '\n' || excLetter === '\r' || excLetter === '' || excLetter === '*') {
        excLetter = '9';
    }
    if (anyLetter === '\n' || anyLetter === '\r' || anyLetter === '' || anyLetter === '*') {
        anyLetter = '9';
    }

    console.log("Word: " + startLetter + secondLetter + thirdLetter + fourthLetter + endLetter);
    fullLetter = startLetter + secondLetter + thirdLetter + fourthLetter + endLetter;

    console.log("anyLetter: " + anyLetter);
    console.log("excLetter: " + excLetter);

    const myInit = {
        mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': 'https://www.schuylermeyer.com' }
    };


    /*fetch(dictURL, myInit)
        .then(res => res.text())
        .then(dict => {*/
    fetch(dictURL, myInit)
        .then(function (res) { return res.text() })
        .then(function (dict) {

            wordList = dict.split("\n");
            wordList = wordList.toString().replace(/(\r\n|\n|\r)/gm, "").split(","); //remove those line breaks

            for (var i in wordList) {
                if ((wordList[i].length === 5) // check length of word
                    && (wordList[i].charAt(0) === startLetter || startLetter === '*') // check first letter
                    && (wordList[i].charAt(1) === secondLetter || secondLetter === '*') // check second letter
                    && (wordList[i].charAt(2) === thirdLetter || thirdLetter === '*') // check third letter
                    && (wordList[i].charAt(3) === fourthLetter || fourthLetter === '*') // check fourth letter
                    && (wordList[i].charAt(wordList[i].length - 1) === endLetter || endLetter === '*')) { // check last letter

                    if (anyLetter.length > 1 || excLetter.length > 1) {

                        for (var x in anyLetter) {

                            if (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter.charAt(x))) {

                                if (!anyLetterAll.includes(anyLetter.charAt(x))) {
                                    anyLetterAll.push(anyLetter.charAt(x));
                                }

                                setList.push(wordList[i]);

                            }

                        }

                        for (var y in excLetter) {

                            if (excLetter !== '' && excLetter !== '9' && wordList[i].includes(excLetter.charAt(y))) {

                                excWords.push(wordList[i]);

                            }

                        }

                    }
                    else {
                        if (excLetter !== '' && excLetter !== '9' && wordList[i].includes(excLetter)) {

                            excWords.push(wordList[i]);

                        }
                        else if (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter)) {

                            setList.push(wordList[i]);

                        }

                    }

                }

            }

            for (var z in setList) {

                for (var w in excWords) {

                    if (setList.includes(excWords[w])) {

                        if (setList[z] === excWords[w]) {
                            //console.log("entry deleted: " + setList[z]);
                            delete setList[z];
                        }
                    }
                }

            }

            for (var u in anyLetterAll) {
                setList = notExcluded(setList, anyLetterAll[u]);
            }

            setList = setList.filter(onlyUnique);

            output.insertAdjacentText('afterbegin', ("(" + fullLetter + ") - " + setList.join(', ')));
            console.log(setList);
            //console.dir(setList, { maxArrayLength: null });

            // reset
            //wordLength = '';
            startLetter = '';
            secondLetter = '';
            thirdLetter = '';
            fourthLetter = '';
            endLetter = '';
            anyLetter = '';
            excLetter = '';
            fullLetter = '';
            excWords = [];
            anyLetterAll = [];
            setList = [];


        })

        .catch(function (error) { console.log(error) }) // Catching errors


    //----------------------------------------//


    //output.insertAdjacentText('afterbegin', setList);

});

// resets / clears the input text boxes
reset.addEventListener("click", function () {

    var output = document.getElementById("output");

    document.getElementById('textbox1').value = "";
    document.getElementById('textbox2').value = "";
    document.getElementById('textbox3').value = "";
    document.getElementById('textbox4').value = "";
    document.getElementById('textbox5').value = "";
    document.getElementById('textbox6').value = "";
    document.getElementById('textbox7').value = "";

    // not ideal to use innerHTML, but until I find something else that works...
    output.innerHTML = '';

});

//-------------------------------------------------------------------------------------------------------------//

//-- Checking If Multiple Entries In Result Function --//
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

//-- Checking If Multiple Entries In Result Function --//
function notExcluded(arr, query) {
    return arr.filter(el => el.indexOf(query) !== -1)
}