Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0


```js
function countVowels(str) {
    var count = 0;
    var input = str.toLowerCase();
    for (var i = 0; i < input.length; ++i) {
        if (isVowel(input[i])) {
            ++count;
        }
    }
}

function isVowel(character) {
    return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
}

// let's test it!

var oneVowel = 'frog';
var multipleVowels = 'croak';
var noVowels = 'rbbt';

console.table([
    {
        input: oneVowel,
        output: countVowels(oneVowel)
    },
    {
        input: multipleVowels,
        output: countVowels(multipleVowels)
    },
    {
        input: noVowels,
        output: countVowels(noVowels)
    }
]);

// alternative version
function countVowels2(str) {
    var count = 0;
    var input = str.toLowerCase();
    var vowelArr = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < input.length; ++i) {
        if (vowelArr.includes(input[i])) {
            ++count;
        }
    }
    return count;
}

```