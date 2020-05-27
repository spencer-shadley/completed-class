// A palindromic number reads the same both ways.
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers

function isPalindrome(x) {
    return x.toString() == x.toString().split("").reverse().join("");
}

function palindrome() {
    let maxPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {

            let tempSum = i * j;

            if (tempSum < maxPalindrome) break;

            if (isPalindrome(tempSum) && tempSum > maxPalindrome) {
                maxPalindrome = tempSum;
            }
        }
    }
    return maxPalindrome;
}


console.log(palindrome());