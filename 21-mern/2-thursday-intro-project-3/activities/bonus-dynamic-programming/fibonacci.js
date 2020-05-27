function fibRecursive(number) {
    if (number <= 1) {
        return number;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

//                            fib(5)
//                      /                \
//                fib(4)                  fib(3)
//              /        \              /       \
//          fib(3)      fib(2)         fib(2)   fib(1)
//         /    \       /    \        /      \
//    fib(2)   fib(1)  fib(1) fib(0) fib(1)  fib(0)
//   /     \
// fib(1) fib(0)
console.log(fibRecursive(5));

function fibDynamicProgramming(number) {
    const f = [];
    f[0] = 1;
    f[1] = 1;
    for (let i = 2; i <= number; ++i) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[number];
}
console.log(fibDynamicProgramming(5));

function fibonacci (num, memo) {
    memo = memo || {};
    if (memo[num]) {
        return memo[num];
    }
    if (num <= 1) {
        return 1;
    }
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    return memo[num];
}
console.log(fibonacci(5));
