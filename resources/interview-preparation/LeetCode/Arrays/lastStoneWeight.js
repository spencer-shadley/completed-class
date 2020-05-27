/* 
**************** QUESTION DESCRIPTION ***********************

    https://leetcode.com/problems/last-stone-weight/

    We have a collection of stones, each stone has a positive integer weight.

    Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

******************** CONSTRAINTS ****************************

    1 <= stones.length <= 30
    1 <= stones[i] <= 1000

********** DEFINE INPUT/OUTPUT/EDGE/OUTLIER *****************

    Input: Array (of integers)
    Output: Integer
    Edge/Outlier:

********************** EXAMPLES *****************************

    Input: [2,7,4,1,8,1]
    Output: 1
    Explanation:
        We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
        we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
        we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
        we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

    Input: [8,7,4,2,1,1]
    Output: 1
    Explanation:
        We combine 7 and 8 and get 1 so the array converts to [1,4,2,1,1]
        We combine 2 and 4 and get 2 so the array converts to [1,2,1,1]
        We combine 2 and 1 and get 1 so the array converts to [1,1,1,]
        We combine 1 and 1 to get 0 so the array converts to [1]. Value of last stone is 1

    Input: 
    Output:
    Explanation:

*********** PSEUDO CODE SOLUTION / BRAINSTORM ****************

    We need to sort the array.
    
    Take the first two numbers and compare:
        If equal:
            Hulk Smash.
            Re-run function. 
        If not:
            Take difference and push to array.
            Remove the first two elements.
            Re-sort and re-run. 

    A faster solution would probably be to implement a heap. 

******************** FUNCTION ****************************  */

function lastStoneWeight(stones) {

    stones.sort((a, b) => b - a)

    while (stones.length > 1) {
        if (stones[0] === stones[1]) {
            stones.splice(0, 2);
        } else {
            let remaining = stones[0] - stones[1];
            stones.push(remaining);
            stones.splice(0, 2);
            stones.sort((a, b) => b - a)
        }
    };

    return stones[0] ? stones[0] : 0;
}

// var lastStoneWeight = function(stones) {
//     let heap = new maxHeap();
//     for (let stone of stones) {
//         heap.insert(stone);
//     }
//     while (heap.elements > 1) {
//         let first = heap.removeMax();
//         let second = heap.removeMax();
//         let diff = Math.abs(first - second);
//         if (diff > 0) heap.insert(diff);
//     }

//     return heap.getMax();
// };


// class maxHeap {
//     constructor() {
//         this.heap = [];
//         this.elements = 0;
//     }

//     insert(num) {
//         if (this.elements >= this.heap.length) {
//             this.heap.push(num);
//         } else {
//             this.heap[this.elements] = num;
//         }
//         this.elements++;
//         this.__shiftUp(this.elements-1);
//     }

//     __shiftUp(index) {
//         let parent = Math.floor((index-1)/2);
//         if (index <= 0) {
//             return;
//         } else if (this.heap[parent] < this.heap[index]) {
//             let tmp = this.heap[parent];
//             this.heap[parent] = this.heap[index];
//             this.heap[index] = tmp;
//             this.__shiftUp(parent);
//         }
//     }

//     __heapify(index) {
//         let left = index*2 + 1;
//         let right = index*2 + 2;
//         let largest = index;
//         if (this.elements > left && this.heap[left] > this.heap[largest]) {
//             largest = left;
//         }
//         if (this.elements > right && this.heap[right] > this.heap[largest]) {
//             largest = right;
//         }
//         if (largest !== index) {
//             let tmp = this.heap[largest];
//             this.heap[largest] = this.heap[index];
//             this.heap[index] = tmp;
//             this.__heapify(largest);
//         }
//     }

//     removeMax() {
//         if (this.elements > 1) {
//             let max = this.heap[0];
//             this.heap[0] = this.heap[this.elements-1];
//             this.elements--;
//             this.__heapify(0);
//             return max;
//         }
//         else if (this.elements === 1) {
//             this.elements--;
//             return this.heap[0];
//         } else {
//             return null;
//         }
//     }

//     getMax() {
//         if (this.elements > 0) {
//             return this.heap[0];
//         }
//         return null;
//     }
// }

// **************** TESTING ******************************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1', 1, lastStoneWeight([2, 7, 4, 1, 8, 1]));
let test2 = new Test('Test 2', 3, lastStoneWeight([9, 7, 7, 6, 6]));
let test3 = new Test('Test 3', 1, lastStoneWeight([1]));
let test4 = new Test('Test 4', 3, lastStoneWeight([9, 9, 7, 7, 3]));

console.table([
    test1,
    test2,
    test3,
    test4,
]);
