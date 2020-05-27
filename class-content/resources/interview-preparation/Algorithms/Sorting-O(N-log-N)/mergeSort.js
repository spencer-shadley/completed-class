// Merge Sort
// O(n log n) 

// Divide and Conquer

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = arr => {
    if (arr.length === 1) {
        return arr
    }
    // Split Array into right and left
    const length = arr.length;
    const middle = Math.floor(length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // console.log(`Left: ${left}`);
    // console.log(`Right: ${right}`);
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
};

const merge = (left, right) => {

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    };
    // console.log(`This is left: ${left} and this is right: ${right}`)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
};

console.log(mergeSort(numbers))