// https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz

/**
 * M = total of arrays length
 * N = total of target length
 * 
 * Note - the below is basically OXlogX) for each sort in practicality but is technically O(X^2)
 * 
 * Combine (concat) the arrays (time: O(M))
 * Sort the combined array (time: O(MlogM))
 * Convert the sorted combined array to a string for easy equality comparison (time: O(M), space: O(M))
 * Sort the target (time: O(NlogN))
 * Convert the target to a string for easy equality comparison (time: O(N), space: O(N))
 * Check if the combined sorted array (as a string) equals the sorted target array (as a string) (time: O(M + N))
 * 
 * time: O(MlogM + NlogN)
 * space: O(M + N)
 * 
 * @param {Array} arrays 
 * @param {Array} target 
 */
function canConcatenateCondensed(arrays, target) {
    return ([]
        .concat(...arrays)
        .sort()
        .join('')
        ===
        target
            .sort()
            .join(''));
}

/**
 * K-Way MergeSort
 * 
 * Sort the arrays so that they are easy to compare
 * 
 * Find the maximum value from the set of strings (which will be the last index of one of the arrays)
 * 
 * Push that maximum value onto a merged array
 * 
 * Check that the merged array (which is sorted) equals the sorted target
 * 
 * @param {Array} arrays 
 * @param {Array} target 
 * 
 * M = total of arrays length
 * N = total of target length
 * 
 * Time complexity: O(MlogM + NlogN)
 * Space complexity: O(M)
 * 
 * About Merge Sort:
 * 
 * Uses a divide and conquer strategy - divide the problem into smaller sorted collections
 * and then combine those smaller collection
 * 
 * Advantages of sorting with MergeSort
 * - Scales well, supports sorting massive datasets, supporting external sorting and parallelization
 * - Fast, even in the worst case (ONlogN)
 * - Stable, elements are sorted in a predictable order, even when their values match
 * - Supports many different collection types
 * 
 * Disadvantages of sorting with MergeSort
 * - Not in-place, meaning it will take additional memory to sort because it keeps intermidate arrays
 * - Low cache locality hits
 * - Slightly slower than quick sort on average, in practice
 */
function canConcatenate(arrays, target) {
    target.sort((a, b) => b - a); // time: O(NlogN)
    sortArrays(arrays); // time: O(MlogM)

    const merged = kMerge(arrays); // space: O(M)

    return areEqual(merged, target); // time: O(M)
}

/**
 * Checks if the given arrays are equal
 * @param {Array} arrOne 
 * @param {Array} arrTwo 
 */
function areEqual(arrOne, arrTwo) {
    for (let i = 0; i < arrOne.length; ++i) {
        if (arrOne[i] !== arrTwo[i]) {
            return false;
        }
    }
    return arrOne.length === arrTwo.length;
}

/**
 * Sorts the given arrays in-place in ascending order
 * @param {Array} arrays 
 */
function sortArrays(arrays) {
    for (const arr of arrays) {
        arr.sort();
    }
}

/**
 * K-Way Merge, combining all arrays
 * https://en.wikipedia.org/wiki/K-way_merge_algorithm
 * 
 * @requires arrays to be sorted in ascending order
 * @param {Array} arrays 
 */
function kMerge(arrays) {
    const merged = []; // space: O(M)

    // all of below is time: O(M)
    const totalLength = arrays.reduce((currTotal, b) => currTotal + b.length, 0);
    while (merged.length !== totalLength) {
        let maxValue = arrays[0][0];
        let maxIndex = 0;

        for (let i = 0; i < arrays.length; ++i) {
            let currArr = arrays[i];
            let currArrMax = currArr[currArr.length - 1];
            if (currArrMax > maxValue || maxValue === undefined) {
                maxValue = currArrMax;
                maxIndex = i;
            }
        }

        merged.push(arrays[maxIndex].pop());
    }
    return merged;
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) === true)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) === false)
console.log(canConcatenate([[1, 4], [3]], [1, 3, 4]) === true)
console.log(canConcatenate([[1, 4], [3]], [1, 2, 3, 4]) === false)
console.log(canConcatenate([[1, 4], [3]], [4, 3, 1]) === true)
console.log(canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2]) === true)
console.log(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2]) === true)