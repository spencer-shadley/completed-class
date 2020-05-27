// Selection Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = arr => {
    const length = arr.length;
    for (let i = 0; i < length; ++i) {
        let min = i;
        let temp = arr[i];
        for (let j = i + 1; j < length; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;
    }
};

selectionSort(numbers);
console.log(numbers)