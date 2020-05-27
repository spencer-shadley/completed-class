// Mark and Jane are very happy after having their first child. 
// Their son loves toys, so Mark wants to buy some. 
// There are a number of different toys lying in front of him, tagged with their prices. 
// Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? 
// For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. 
// He would choose the first group of  items.

// Function Description

// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

// maximumToys has the following parameter(s):

// prices: an array of integers representing toy prices
// k: an integer, Mark's budget
// Input Format

// The first line contains two integers,  and , the number of priced toys and the amount Mark has to spend.
// The next line contains  space-separated integers 

// k: 50
// prices: [1, 5, 10, 12, 111, 200, 1000]

function maximumToys(prices, k) {

    let arr = prices.sort((a, b) => a - b);
    let boughtToys = 0;
    let totalCost = k;


    for (let i = 0; i < arr.length; i++) {
        if (totalCost - arr[i] > 0) {
            totalCost -= arr[i];
            boughtToys++;
        }
    }

    return boughtToys;
}

console.log(maximumToys([200, 111, 1000, 12, 10, 5, 1], 50))