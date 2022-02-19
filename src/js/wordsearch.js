/*-- wordsearch.js // Schuyler Meyer // 2022 --*/
//-- Using Node.js --//


var express = require("express");
const fetch = require('node-fetch');
const url = require('url');

var fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

var app = express();

//const dictPath = './../files/test.txt';
const dictPath = './../files/english.txt';

const dictURL = "https://www.schuylermeyer.com/src/files/english.txt";

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

//-----------TODO---------//
// -work on HMTL page     //
// -user input            //
//----------TODO----------//


console.log("Please enter the corresponding letter or '*' for unknown.")
//wordLength = prompt("Please enter the length of the word: ");
startLetter = prompt("Please enter the first letter: ");
secondLetter = prompt("Please enter the second letter: ");
thirdLetter = prompt("Please enter the third letter: ");
fourthLetter = prompt("Please enter the fourth letter: ");
endLetter = prompt("Please enter the last letter: ");
anyLetter = prompt("Please enter a letter you don't know the position of. Press enter to skip: ");
excLetter = prompt("Please enter a letter to exclude. Press enter to skip: ");

startLetter = startLetter.toLowerCase();
secondLetter = secondLetter.toLowerCase();
thirdLetter = thirdLetter.toLowerCase();
fourthLetter = fourthLetter.toLowerCase();
endLetter = endLetter.toLowerCase();
anyLetter = anyLetter.toLowerCase();
excLetter = excLetter.toLowerCase();


console.log("Word: " + startLetter + secondLetter + thirdLetter + fourthLetter + endLetter);

if (excLetter === '\n' || excLetter === '\r' || excLetter === ''){
  excLetter = '9';
}
if (anyLetter === '\n' || anyLetter === '\r' || anyLetter === ''){
  anyLetter = '9';
}

console.log(anyLetter.length);
console.log(excLetter.length);

//-------------------------------------------------------------------------------------------------------------//

fs.readFile(dictPath, "utf-8", function (err, text) {
    if (err) {
        return console.log(err);
    }

    wordList = text.split("\n");
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
    wordLength = '';
    startLetter = '';
    secondLetter = '';
    thirdLetter = '';
    fourthLetter = '';
    endLetter = '';
    anyLetter = '';
    excLetter = '';
    excWords = [];
    anyLetterAll = [];

    //console.log(setList);
    //console.table(setList);
    console.dir(setList, { maxArrayLength: null });

});

//-------------------------------------------------------------------------------------------------------------//


app.get("/", async function (req, res) {

    //FetchData(res);

})

function FetchData(res) {
    fetch(dictURL)
        .then(res => res.text())
        .then(text => {

            console.log("word list received from: " + dictURL);

            wordList = text.split("\n");
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

                            for (let y in excLetter) {

                                if (excLetter !== '' && excLetter !== '9' && wordList[i].includes(excLetter.charAt(y))) {

                                    excWords.push(wordList[i]);

                                }
                                else if (!excWords.find(v => wordList[i] === v) && (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter.charAt(x)))) {

                                    setList.push(wordList[i]);

                                }

                            }
                        }

                    }
                    else {
                        if (excLetter !== '' && excLetter !== '9' && wordList[i].includes(excLetter)) {

                            excWords.push(wordList[i]);

                        }
                        else if (!excWords.find(v => wordList[i] === v) && (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter))) {

                            setList.push(wordList[i]);

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


                }


            }

            setList = setList.filter(onlyUnique);

            // reset
            wordLength = '';
            startLetter = '';
            secondLetter = '';
            thirdLetter = '';
            fourthLetter = '';
            endLetter = '';
            anyLetter = '';
            excLetter = '';
            excWords = [];

            console.log(setList);
            res.status(200).send(setList);
            //console.table(setList);
            //console.dir(setList, {maxArrayLength: null});




        })
        .catch(error => console.log(error)) // Catching errors
}

//app.listen(3000, () => {
//    console.log("Server running on port 3000.");
//});


//-------------------------------------------------------------------------------------------------------------//

//-- Checking If Multiple Entries In Result Function --//
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

//-- Checking If Multiple Entries In Result Function --//
function notExcluded(arr, query) {
    return arr.filter(el => el.indexOf(query) !== -1)
}

