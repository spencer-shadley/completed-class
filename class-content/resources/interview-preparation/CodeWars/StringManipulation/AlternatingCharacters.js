// You are given a string containing characters A and B only. 
// Your task is to change it into a string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string , remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below. 
// It must return an integer representing the minimum number of deletions to make the alternating string.

// alternatingCharacters has the following parameter(s):

// s: a string
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string .

// Constraints

// Each string  will consist only of characters  and 
// Output Format

// For each query, print the minimum number of deletions required on a new line.

function alternatingCharacters(s) {

    let result = 0;
 
    if (s.length >= 1 && s.length <= 100000) {
         let arr = s.split('');
         let past = arr[0];
         
         arr = arr.filter((item, key) => {
              if (item !== past && key !== 0) {
                   past = item;
                   return item; 
              }  
         });
         result = s.length - [ s.charAt(0), ...arr ].length;
    }
    
    return result; 
}

console.log(alternatingCharacters("AABAAB"))