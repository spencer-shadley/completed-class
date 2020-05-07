// Alice is a kindergarten teacher.
// She wants to give some candies to the children in her class.  
// All the children sit in a line and each of them has a rating score according to his or her performance in the class.  
// Alice wants to give at least 1 candy to each child. 
// If two children sit next to each other, then the one with the higher rating must get more candies. 
// Alice wants to minimize the total number of candies she must buy.

// For example, assume her students' ratings are [4, 6, 4, 5, 6, 2]. 
// She gives the students candy in the following minimal amounts: [1, 2, 1, 2, 3, 1]. 
// She must buy a minimum of 10 candies.

// Input: (Integer(# of kids), Array(Performance score of kids))
// Output: Integer
// Edge/Outlier: 

const minCandies = (n, arr) => {

    let result = 0;
    let previous;

    for (let i = 0; i < n; ++i) {
        let candy = 1;
        let j = 1;
        // if current < next
        if (arr[i] < arr[i + 1]) {
            ++candy;
            // next < next next
            while (arr[i + j] < arr[i + j + 1]) {
                ++candy
                ++j;
            }
            i += j;
            previous = candy;
            while (j >= 0) {
                result += candy;
                --j;
                --candy;
            }
            // if current > next
        } else if (arr[i] > arr[i + 1]) {
            ++candy;
            while (arr[i + j] > arr[i + j + 1]) {
                ++candy;
                ++j;
            }
            i += j;
            // next > next next
            while (j >= 0) {
                result += candy;
                previous = candy;
                --j;
                --candy;
            }
            // else  
        } else {
            // push previous -1
            result += previous - 1;
        }
    }
    return result;
}

console.log(minCandies(3, [1, 2, 2]))
// Solution: 4
console.log(minCandies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]))
// Solution 19
console.log(minCandies(6, [9, 8, 7, 6, 5, 4,]))
// Solution 21
