// We use memoization to create an object of known values.
// This saves an exponential amount of performance, since we aren't repeating calcuations.


const fibonacci = (num, memo) => {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

console.log(fibonacci(10));