// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function FizzBuzz() {


    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0 && i % 5 != 0) {
            console.log(i + " " + "Fizz");
        }
        if (i % 5 === 0 && (i % 3 != 0)) {
            console.log(i + " " + "Buzz")
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " " + "FizzBuzz")
        }
    }

}

FizzBuzz();