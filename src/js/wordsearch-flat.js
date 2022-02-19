/*-- wordsearch-flat.js // Schuyler Meyer // 2022 --*/


const dictURL = "https://www.schuylermeyer.com/src/files/english.txt";
const dictPath = './../files/english.txt';


var wordList = [];
var setList = [];
var wordLength = '';
var startLetter = '';
var secondLetter = '';
var thirdLetter = '';
var fourthLetter = '';
var endLetter = '';
var anyLetter = '';
var excLetter = '';

var anyLetterAll = [];
var excWords = [];

var tb1 = document.getElementById("textbox1");
var tb2 = document.getElementById("textbox2");
var tb3 = document.getElementById("textbox3");
var tb4 = document.getElementById("textbox4");
var tb5 = document.getElementById("textbox5");
var tb6 = document.getElementById("textbox6");
var tb7 = document.getElementById("textbox7");
var submit = document.getElementById("submit");
var reset = document.getElementById("reset");


submit.addEventListener("click", function () {

    var output = document.getElementById("output");

    output.innerHTML = '';

    var startLetter = tb1.value;
    var secondLetter = tb2.value;
    var thirdLetter = tb3.value;
    var fourthLetter = tb4.value;
    var endLetter = tb5.value;
    var anyLetter = tb6.value;
    var excLetter = tb7.value;

    if (excLetter === '\n' || excLetter === '\r' || excLetter === '') {
        excLetter = '9';
    }
    if (anyLetter === '\n' || anyLetter === '\r' || anyLetter === '') {
        anyLetter = '9';
    }

    console.log("Word: " + startLetter + secondLetter + thirdLetter + fourthLetter + endLetter);

    //console.log("startLetter: " + startLetter);
    //console.log("secondLetter: " + secondLetter);
    //console.log("thirdLetter: " + thirdLetter);
    //console.log("fourthLetter: " + fourthLetter);
    //console.log("endLetter: " + endLetter);
    console.log("anyLetter: " + anyLetter);
    console.log("excLetter: " + excLetter);

    const myInit = {
        //mode: 'cors',
        headers: { 'Access-Control-Allow-Origin': 'https://https://www.schuylermeyer.com' }
    };


    fetch(dictURL, myInit)
        .then(res => res.text())
        .then(dict => {

            wordList = dict.split("\n");
            wordList = wordList.toString().replace(/(\r\n|\n|\r)/gm, "").split(","); //remove those line breaks

            for (let i in wordList) {
                if ((wordList[i].length === 5) // check length of word
                    && (wordList[i].charAt(0) === startLetter || startLetter === '*') // check first letter
                    && (wordList[i].charAt(1) === secondLetter || secondLetter === '*') // check second letter
                    && (wordList[i].charAt(2) === thirdLetter || thirdLetter === '*') // check third letter
                    && (wordList[i].charAt(3) === fourthLetter || fourthLetter === '*') // check fourth letter
                    && (wordList[i].charAt(wordList[i].length - 1) === endLetter || endLetter === '*')) { // check last letter

                    if (anyLetter.length > 1 || excLetter.length > 1) {

                        for (let x in anyLetter) {

                            if (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter.charAt(x))) {

                                if (!anyLetterAll.includes(anyLetter.charAt(x))) {
                                    anyLetterAll.push(anyLetter.charAt(x));
                                }

                                setList.push(wordList[i]);

                            }

                        }

                        for (let y in excLetter) {

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

            for (let z in setList) {

                for (let w in excWords) {

                    if (setList.includes(excWords[w])) {

                        if (setList[z] === excWords[w]) {
                            console.log("entry deleted: " + setList[z]);
                            delete setList[z];
                        }
                    }
                }

            }

            for (let u in anyLetterAll) {
                setList = notExcluded(setList, anyLetterAll[u]);
            }

            setList = setList.filter(onlyUnique);

            // reset
            //wordLength = '';
            startLetter = '';
            secondLetter = '';
            thirdLetter = '';
            fourthLetter = '';
            endLetter = '';
            anyLetter = '';
            excLetter = '';
            excWords = [];
            anyLetterAll = [];

            output.insertAdjacentText('afterbegin', setList.join(', '));
            console.log(setList);
            //console.dir(setList, { maxArrayLength: null });


        })

        .catch(error => console.log(error)) // Catching errors


    //----------------------------------------//


    //output.insertAdjacentText('afterbegin', setList);

});

// resets / clears the input text boxes
reset.addEventListener("click", function () {

    document.getElementById('textbox1').value = "";
    document.getElementById('textbox2').value = "";
    document.getElementById('textbox3').value = "";
    document.getElementById('textbox4').value = "";
    document.getElementById('textbox5').value = "";
    document.getElementById('textbox6').value = "";
    document.getElementById('textbox7').value = "";
    document.getElementById('output').value = "";

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