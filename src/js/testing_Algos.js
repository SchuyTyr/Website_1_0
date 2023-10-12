/*-- testing_Algos.js // Schuyler Meyer // 2023 --*/

// Kadane's Algo

import { max_subarray } from "./kadane_Algo.js";

function kadaneAlgo() {
    var numForAlgo = document.getElementById(numForAlgo);
    console.log("numForAlgo: " + numForAlgo);

    var output = document.getElementById(output);

    var separatedArray = numForAlgo.split(', ');
    console.log("separatedArray: " + separatedArray);

    var numbers = Number(separatedArray);
    console.log("numbers: " + numbers);

    output.innerHTML = max_subarray(numbers);

    
}