// Factorial using recursion



const findFactorialRecursive = number => {

    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5))