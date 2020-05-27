
// Write a solution to find the lowest integer that ISNT contained in the array. Greater than 0


function solution(A) {
    var min = 1;
    A.sort(function (a, b) {
        // Sort the array explicit way
        return a - b;
    });

    for (var i in A) {
        if (A[i] > 0 && A[i] == min) {
            min++;
        }
    }

    return min;
}

console.log(solution([1, 2, 3, 4, 5, 15, 6, 1, 6]))