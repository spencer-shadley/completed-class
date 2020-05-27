// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.


function listSquared(m, n) {
    // your code
    // Given two integers, m, n. Output all integers between m and n whose sum of squared divisors is itself a square. 
    // Output will be an array of strings

    var output = [];

    // For loop to find all divisors
    for (var i = m; i <= n; i++) {
        
        var sum = 0;

        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {

                // Sum all the divisors 
                sum += (j * j);
            }
        }

        // Test if sum of divisors is a square
        if (Math.sqrt(sum) % 1 === 0) {
            output.push([i, sum]);
        }
    }

    return output;


}

console.log(listSquared(1, 250));