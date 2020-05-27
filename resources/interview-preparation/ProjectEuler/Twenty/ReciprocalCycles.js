// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2	= 	0.5
// 1/3	= 	0.(3)
// 1/4	= 	0.25
// 1/5	= 	0.2
// 1/6	= 	0.1(6)
// 1/7	= 	0.(142857)
// 1/8	= 	0.125
// 1/9	= 	0.(1)
// 1/10	= 	0.1

// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

// Input: Integer (2 --> 1000)
// Output: Integer (Index of largest substring)

// Finding the remainder of each number by dividing 1 / i.
// Take the remainder and multiply by 10, grab the number pre-decimeal by use of RegExp.
// If this number modulus remainder doesn't equal 0. Multiply by 100. 
// Must check each substring of pre-decimal numbers. 

const reciprocalCycle = () => {

    const primes = [7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
        73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
        127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
        179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
        233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
        283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
        353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
        419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
        467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
        547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
        607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
        661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
        739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
        811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
        877, 881, 883, 887, 907, 911, 919, 929, 937, 941,
        947, 953, 967, 971, 977, 983, 991, 997];
      
        let max = 0;
        let max_p = 0;
        for (let i = 0; i < primes.length; i++) {
          let tmp = cycleLength(primes[i]);
          if (tmp > max) {
            max_p = primes[i];
            max = tmp;
          }
        }
        return max_p;
}

  const cycleLength = (b) => {
    let hash = {};
    let a = 1;
    let t = 0;
    do {
      hash[a] = t;
      a = a % b * 10;
      t++;
    // console.log(hash)
    } while (hash[a] === undefined);
    return t - hash[a];
  }

const countAfterDecimal = (value) => {
    return value.toString().split('.')[1].length || 0;
}

const countPreDecimal = (value) => {
    return value.toString().split('.')[0] || 0;
}

const pattern = /(\d+)\./g;

console.log(cycleLength(7));
// console.log(reciprocalCycle());