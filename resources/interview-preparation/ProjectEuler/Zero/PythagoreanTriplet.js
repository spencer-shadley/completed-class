// A Pythagorean triplet is a set of three natural numbers, 
// a < b < c, for which,

// a2 + b2 = c2


// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pythagorean() {

    let a = 0
    let b = 0
    let c = 0
    let s = 1000;
    let found = false;
    
    for (a = 1; a < s / 3; a++) {
        for (b = a; b < s / 2; b++) {
            c = s - a - b;
     
            if (a * a + b * b == c * c) {
                found = true;
                a = a;
                b = b;
                c = c;
                break;
            }
        }
     
        if (found) {
            break;
        }
    }

    // (3,4,5)
    // k3 + k4 = k5
    // k = postiive int

    // The answer with algebra comes to i = 83.3333
    // Math.pow(a, 2) = 250
    // Math.pow(b, 2) = 333.33
    // Math.pow(c, 2) = 416.667
    // Not integers, so doenst counter. 


    return (a * b * c)


}

console.log(pythagorean());