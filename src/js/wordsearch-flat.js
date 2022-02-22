/*-- wordsearch-flat.js // Schuyler Meyer // 2022 --*/

// Changed "let" to "var" (among other changes, like removed "=>" and "includes") for older phone browsers (ES5 - ES6)


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

//-- Unnecessary variables --//
//var tb1 = document.getElementById("textbox1");
//var tb2 = document.getElementById("textbox2");
//var tb3 = document.getElementById("textbox3");
//var tb4 = document.getElementById("textbox4");
//var tb5 = document.getElementById("textbox5");
//var tb6 = document.getElementById("textbox6");
//var tb7 = document.getElementById("textbox7");

var anyLetterAll = [];
var excWords = [];

const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

const loadingIcon = document.getElementById('loading');
loadingIcon.style.display = "none";


submit.addEventListener("click", function () {

    loadingIcon.style.display = "block";

    var startLetter = document.getElementById("textbox1").value;
    var secondLetter = document.getElementById("textbox2").value;
    var thirdLetter = document.getElementById("textbox3").value;
    var fourthLetter = document.getElementById("textbox4").value;
    var endLetter = document.getElementById("textbox5").value;
    var anyLetter = document.getElementById("textbox6").value;
    var excLetter = document.getElementById("textbox7").value;

    var output = document.getElementById("output");

    // not ideal to use innerHTML, but until I find something else that works...
    output.innerHTML = '';

    //var startLetter = tb1.value;
    //var secondLetter = tb2.value;
    //var thirdLetter = tb3.value;
    //var fourthLetter = tb4.value;
    //var endLetter = tb5.value;
    //var anyLetter = tb6.value;
    //var excLetter = tb7.value;

    //-- If the letter is a 'space' / empty string, then change it to a '*', else leave it as is --//
    startLetter = startLetter === '' ? '*' : startLetter;
    secondLetter = secondLetter === '' ? '*' : secondLetter;
    thirdLetter = thirdLetter === '' ? '*' : thirdLetter;
    fourthLetter = fourthLetter === '' ? '*' : fourthLetter;
    endLetter = endLetter === '' ? '*' : endLetter;

    //-- Change all letters / inputs to lowercase (mobile devices were inputting uppercase letters) --//
    startLetter = startLetter.toLowerCase();
    secondLetter = secondLetter.toLowerCase();
    thirdLetter = thirdLetter.toLowerCase();
    fourthLetter = fourthLetter.toLowerCase();
    endLetter = endLetter.toLowerCase();
    anyLetter = anyLetter.toLowerCase();
    excLetter = excLetter.toLowerCase();

    //-- If the include or exclude letters are a newline, empty string, or *, change to '9' --//
    if (excLetter === '\n' || excLetter === '\r' || excLetter === '' || excLetter === '*') {
        excLetter = '9';
    }
    if (anyLetter === '\n' || anyLetter === '\r' || anyLetter === '' || anyLetter === '*') {
        anyLetter = '9';
    }

    fullLetter = startLetter + secondLetter + thirdLetter + fourthLetter + endLetter;
    console.log("Word: " + fullLetter);
    
    console.log("anyLetter: " + anyLetter);
    console.log("excLetter: " + excLetter);

    const myInit = {
        credentials: 'include',
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
            wordList = wordList.toString().replace(/(\r\n|\n|\r)/gm, "").split(","); //-- remove those line breaks --//

            for (var i in wordList) {
                if ((wordList[i].length === 5) //-- check length of word --//
                    && (wordList[i].charAt(0) === startLetter || startLetter === '*') //-- check first letter --//
                    && (wordList[i].charAt(1) === secondLetter || secondLetter === '*') //-- check second letter --//
                    && (wordList[i].charAt(2) === thirdLetter || thirdLetter === '*') //-- check third letter --//
                    && (wordList[i].charAt(3) === fourthLetter || fourthLetter === '*') //-- check fourth letter --//
                    && (wordList[i].charAt(wordList[i].length - 1) === endLetter || endLetter === '*')) { //-- check last letter --//

                    if (anyLetter.length > 1 || excLetter.length > 1) {

                        for (var x in anyLetter) {

                            //if (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter.charAt(x))) {
                            if (anyLetter === '' || anyLetter === '9' || wordList[i].indexOf(anyLetter.charAt(x)) !== -1) {

                                //if (!anyLetterAll.includes(anyLetter.charAt(x)) && anyLetter !== '' && anyLetter !== '9') {
                                if (anyLetterAll.indexOf(anyLetter.charAt(x)) === -1 && anyLetter !== '' && anyLetter !== '9') {
                                    anyLetterAll.push(anyLetter.charAt(x));
                                }

                                setList.push(wordList[i]);

                            }

                        }

                        for (var y in excLetter) {

                            //if (excLetter !== '' && excLetter !== '9' && wordList[i].includes(excLetter.charAt(y))) {
                            if (excLetter !== '' && excLetter !== '9' && wordList[i].indexOf(excLetter.charAt(y)) !== -1) {

                                excWords.push(wordList[i]);

                            }

                        }

                    }
                    else {
                        //if (excLetter !== '' && excLetter !== '9' && wordList[i].includes(excLetter)) {
                        if (excLetter !== '' && excLetter !== '9' && wordList[i].indexOf(excLetter) !== -1) {

                            excWords.push(wordList[i]);

                        }
                        //else if (anyLetter === '' || anyLetter === '9' || wordList[i].includes(anyLetter)) {
                        else if (anyLetter === '' || anyLetter === '9' || wordList[i].indexOf(anyLetter) !== -1) {

                            if (anyLetter !== '' && anyLetter !== '9') {
                                anyLetterAll.push(anyLetter);
                            }
                            setList.push(wordList[i]);

                        }

                    }

                }

            }

            //-- Works? Very slow. --//

            //if (excWords.length !== 0) {
            //    for (var z in setList) {

            //        for (var w in excWords) {

            //            //if (setList.includes(excWords[w])) {
            //            if (setList.indexOf(excWords[w]) !== -1) {

            //                if (setList[z] === excWords[w]) {
            //                    console.log("entry deleted: " + setList[z]);
            //                    delete setList[z];
            //                }
            //            }
            //        }

            //    }
            //}

            //-- remove the duplicate words first because "indexOf" only finds the first instance of, not others --//

            setList = setList.filter(onlyUnique);

            var index;
            for (var d = 0; d < excWords.length; d++) {
                index = setList.indexOf(excWords[d]);
                if (index > -1) {
                    console.log("entry deleted: " + setList[index]);
                    //output.insertAdjacentText('afterbegin', ("Calculating " + Math.round(getRandom())));
                    //console.log(("Calculating " + Math.round(getRandom())));
                    setList.splice(index, 1);
                }
            }

            if (anyLetterAll.length !== 0) {
                for (var u in anyLetterAll) {
                    setList = notExcluded(setList, anyLetterAll[u]);
                }
            }

            output.innerHTML = '';

            output.insertAdjacentText('afterbegin', ("[ " + setList.length + " words ] - (" + fullLetter + ") - " + setList.join(', ')));
            console.log(setList);
            //console.dir(setList, { maxArrayLength: null });

            //-- reset --//
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

            //-- Loading Function --//
            //function getRandom() {
            //    return (Math.random() * 100);
            //}

            loadingIcon.style.display = "none";


        })

        .catch(function (error) { console.log(error) }) // Catching errors


});

// resets / clears the input text boxes
reset.addEventListener("click", function () {

    var output = document.getElementById("output");

    loadingIcon.style.display = "none";

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

//-- Checking Something Function --//
function notExcluded(array, query) {
    return array.filter(function (notEx) { return notEx.indexOf(query) !== -1 });
}


