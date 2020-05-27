// Find all sets in an array that add up to a particular sum
// This is very prominent in dynamic programming
// Breaking a larger problem into smaller sub-set problems

const countSets = (arr, total) => {
    let mem = {} // empty dict or hash table
    return dp(arr, total, arr.length - 1, mem);
}

const dp = (arr, total, i, mem) => {
    let key = `${total}:${i}`
    for (const keys in mem) {
        if (keys === key) {
            return mem[key]
        }
    }
    if (total === 0) {
        return 1;
    } else if (total < 0) {
        return 0;
    } else if (i < 0) {
        return 0;
    } else if (total < arr[i]) {
        to_return = dp(arr, total, i - 1, mem);
    } else {
        to_return = (dp(arr, total - arr[i], i - 1, mem) + dp(arr, total, i - 1, mem));
    }
    mem[key] = to_return;
    return to_return;
}


console.log(countSets([2, 4, 6, 10], 16));