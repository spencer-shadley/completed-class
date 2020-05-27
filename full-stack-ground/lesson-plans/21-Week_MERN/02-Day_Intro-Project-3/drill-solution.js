// https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---gcd/problem

function GCD(x, y) {
    return x < y ? GCDhelper(x, y) : GCDhelper(y, x);
}

function GCDhelper(x, y) {
    const r = y % x;

    if (r === 0) {
        return x;
    }

    return GCDhelper(r, x);
}

function GCDhelperCollapsed(x, y) {
    return r === 0 ? x : GCDhelper(y % x, x);
}

function GCDane(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return `Not a valid input`;
    }
    return y ? gcd(y, x % y) : Math.abs(x);
}

let output = GCD(10, 45); 
console.log(output === 5, output);

output = GCD(1701, 3768);
console.log(output === 3, output);

output = GCD(1, 1);
console.log(output === 1, output);

output = GCD(180, 2);
console.log(output === 2, output);
