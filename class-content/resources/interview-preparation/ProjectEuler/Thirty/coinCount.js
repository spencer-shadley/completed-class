// In the United Kingdom the currency is made up of pound (£) and pence (p). 
// There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

// Input: 
// Output: Integer (# of substrings) 

// We have the sum, we are finding substrings that add up to 200
// Our array contains 1,2,5,10,20,50,100,200

const coinCount = (coins, target) => {

    const table = new Array(target + 1);
    for (let i = 0; i <= target; ++i) {
        table[i] = new Array(coins.length);
        table[i][0] = 1;
    };

    for (let i = 0; i <= target; ++i) {
        for (let j = 1; j < coins.length; ++j) {
            table[i][j] = table[i][j - 1];
            if (coins[j] <= i)
                table[i][j] += table[i - coins[j]][j];
        }
    };

    // console.log(table)
    return table[table.length - 1][coins.length - 1]
}

const coins1 = [1, 2, 5, 10, 20, 50, 100, 200];
const coins2 = [1, 2, 3]

// console.log(coinCount(coins1, 200));
console.log(coinCount(coins2, 4));
