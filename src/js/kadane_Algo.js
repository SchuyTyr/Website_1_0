/*-- kadane_Algo.js // Schuyler Meyer // 2023 --*/

// The runtime complexity of Kadane's algorithm is O(n) and its space complexity is O(1).

export function max_subarray(numbers) {

    // Find the largest sum of any contiguous subarray.
    var best_sum = - Infinity
    var current_sum = 0

    for (var x in numbers) {
        current_sum = Math.max(x, current_sum + x)
        best_sum = Math.max(best_sum, current_sum)
    }

    console.log("best_sum: " + best_sum);
    return best_sum
}

