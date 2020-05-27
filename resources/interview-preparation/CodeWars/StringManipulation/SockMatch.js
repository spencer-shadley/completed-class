// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.



function sockMerchant(n, arr) {

    const min = 1;
    const max = 100;

    if (n < min || n > max) {
        return "Invalid input."
    }
    let pairs = 0;
    let sockMap = {};
   
    arr.map((item) => {
        if (sockMap.hasOwnProperty(item)) {
            sockMap[item] = sockMap[item] + 1;
        } else {
            sockMap[item] = 1;
        }
    });

    for(var sock in sockMap) {
        if(sockMap.hasOwnProperty(sock)) {
            if(sockMap[sock] % 2 === 0) {
                pairs += (sockMap[sock] / 2);
            } else if ((sockMap[sock] - 1) % 2 === 0) {
                pairs += ((sockMap[sock] - 1) / 2);
            }
        }
    }


    return pairs;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));