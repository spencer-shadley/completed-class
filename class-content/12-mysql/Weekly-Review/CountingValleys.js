'use strict'

// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly n steps.
// For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path

// Input Format

// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.

// Output Format

// Print a single integer that denotes the number of valleys Gary walked through during his hike.

const CountingValleys = (n, s) => {

    let min = 2;
    let max = 10000000;

    if (n <= min || n >= max) {
        return "invalid number of steps"
    }

    let valleys = 0;
    let currentHeight = 0;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "U") {
            if (currentHeight === -1) {
                valleys++;
            }
            currentHeight++;
        } else if (s[i] === "D") {
            currentHeight--;
        }
    }

    if (currentHeight === 0) {
        return valleys;
    } else {
        return "Hiker never returned to sea level. "
    }
}

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}


let test1 = new Test('Test 1', 1, CountingValleys(8, "UDDDUDUU"));
let test2 = new Test('Test 2', 5, CountingValleys(100, "DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD"));


console.table([
    test1,
    test2,
])