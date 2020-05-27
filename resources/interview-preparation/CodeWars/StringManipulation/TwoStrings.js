
// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring . 
// The words "be" and "cat" do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below. 
// It should return a string, either YES or NO based on whether the strings share a common substring.

// twoStrings has the following parameter(s):

// s1, s2: two strings to analyze .
// Input Format

// The first line contains a single integer , the number of test cases.

// The following  pairs of lines are as follows:

// The first line contains string .
// The second line contains string .
// Constraints

//  and  consist of characters in the range ascii[a-z].
// Output Format

// For each pair of strings, return YES or NO.

function twoStrings(s1, s2) {

    let arr1 = s1.split("");
    let arr2 = s2.split("");

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i], 0)) {
            return "YES"
        }
    }

    return "NO"
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));