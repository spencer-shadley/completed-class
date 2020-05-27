/**
 * Recursive 2^N solution
 * @param {Number} W
 * @param {Number[]} wt
 * @param {Number[]} val
 * @param {Number} n
 */
function knapsackRecursive(W, wt, val, n) {
    if (n === 0 || W === 0) {
        return 0;
    }

    if (wt[n - 1] > W) {
        return knapsack(W, wt, val, n - 1);
    }

    return Math.max(
        val[n - 1] + knapsack(W - wt[n - 1], wt, val, n - 1),
        knapsack(W, wt, val, n - 1));
}

// wt[] = {1, 1, 1}, W = 2, val[] = {10, 20, 30}

//                     K(3, 2)         ---------> K(n, W)
//                 /            \
//                 /                \
//             K(2,2)                  K(2,1)
//         /       \                  /    \
//         /           \              /        \
//     K(1,2)      K(1,1)        K(1,1)     K(1,0)
//     /  \         /   \          /   \
//     /      \     /       \      /       \

// K(0,2) K(0,1) K(0,1) K(0,0) K(0,1) K(0,0)

// https://media.geeksforgeeks.org/wp-content/uploads/gfg-2.jpg
function knapsackDynamicProgramming(W, wt, val, number) {
    const k = [];

    for (let i = 0; i <= number; ++i) {
        for (let w = 0; w <= W; ++w) {
            if (i === 0 || w === 0) {
                k[i][w] = 0;
            } else if (wt[i - 1 <= w]) {
                k[i][w] = Math.max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w]);
            } else {
                k[i][w] = k[i - 1][w];
            }
        }
    }
    return k[number][W];
}
