// 2^(15) = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^(1000)?

var bigInt = require("big-integer");

function pow(n, p) {
    var r = bigInt(1);  // (n, 0, 0);
    var bn = bigInt(n); //var bn = (n, 0, 0);
    for (var i = 0; i < p; i++) {
        r = r.multiply(bn); //r = mult(r, bn);
    }
    return r;
}

function sumDigits(n) {
    var bns = n.toString(); // bigInt2str(n, 10);
    var dStr = 0;
    var a = bns.split('');
    for (i in a) {
        dStr += parseInt(a[i]);
    }
    return dStr;
}
console.log(sumDigits(pow(2, 1000)));