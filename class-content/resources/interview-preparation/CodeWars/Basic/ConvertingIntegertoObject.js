// Input is an array of integers(A)
// Output is an array of objects(T)
// Constraints: 
// T[i].hasOwnProperty('value') === false;
// Objects are identical;
// T[i].value === T[i+1].value;
// T[i].value() === "Value";
// For example: T[0].value() === 1 && T[1].value() === 4;

let A = [1, 4, 5, 6]
let T = []


function Object() {
}

function Convert(A) {

    for (let i = 0; i < A.length; i++) {
        T.push(new Object());
    }
}

Object.prototype.value = function () {
    console.log("My value is: " + A[T.indexOf(this)])
}

Convert(A);


console.log(T)
console.log(T[0].hasOwnProperty('value'))
console.log(T[1].hasOwnProperty('value'))
T[0].value();
T[3].value();
console.log(T[0].value)


