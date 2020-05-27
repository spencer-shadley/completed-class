// Insertion Sort

// Its useful when list is almost / semi sorted.
// Can be O(n)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = arr => {

    const length = arr.length;
    for (let i = 0; i < length; ++i) {
        if (arr[i] < arr[0]) {
            // Move number to the first position
            arr.unshift(arr.splice(i, 1)[0])
        } else {
            // find where number should go
            for (let j = 1; j < i; ++j) {
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    // move number to the right spot
                    arr.splice(j, 0, arr.splice(i, 1)[0])
                }
            }
        }
    }

}

insertionSort(numbers);
console.log(numbers);