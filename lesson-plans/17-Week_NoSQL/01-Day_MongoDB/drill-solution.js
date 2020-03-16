'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description nested loop through the numbers, counting how many times a number is found to be smaller
 * @summary O(N^2) because it loops through all numbers twice
 *
 * Runtime: 80 ms, faster than 53.59% of JavaScript online submissions
 * Memory Usage: 36.3 MB, less than 100.00% of JavaScript online submissions
 */
function smallerNumbersThanCurrent(nums) {
  const output = [];

  nums.forEach(num1 => { // O(N)
    let count = 0;
    nums.forEach(num2 => { // O(N)
      if (num2 < num1) {
        ++count;
      }
    });
    output.push(count);
  });
  return output;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description loop through the numbers, reducing the array to the number of smaller items
 * @summary O(N^2) because we loop through the entire array (O(N)) and for each time we loop we call reduce (O(N))
 *
 * Runtime: 88 ms, faster than 23.12% of JavaScript online submissions
 * Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions
 */
function smallerNumbersThanCurrentReducer(nums) {
  const output = [];
  nums.forEach(num => { // O(N)
    const count = nums.reduce((accumulator, current) => { // O(N)
      if (current < num) {
        ++accumulator;
      }
      return accumulator;
    }, 0);
    output.push(count);
  });
  return output;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description slowly manipulate the array using sorting and mapping, building towards a final solution
 * @summary O(NlogN) because the most expensive operation is sorting, which is NlogN
 *
 * This is significantly faster than the above solutions for large inputs, although likely slower for smaller inputs.
 *
 * Runtime: 84 ms, faster than 34.82% of JavaScript online submissions
 * Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions
 */
function smallerNumbersThanCurrentSorted(nums) {
  // each section is annotated as follows assuming an input of [8,1,2,2,3]:
  // Big O
  // result:
  // object line 1
  // object line 2
  // object line 3

  // O(N)
  // result:
  // num   - 8,1,2,2,3
  // index - 0,1,2,3,4
  const numsWithIndex = nums.map((num, index) => ({
    num,
    index
  }));

  // O(NlogN) (basically)
  // sort by the value (but we still have information on how to restore indices)
  // result:
  // num   - 1,2,2,3,8
  // index - 1,2,3,4,0
  numsWithIndex.sort((numObjA, numObjB) => numObjA.num - numObjB.num);

  let numFoundLessThan = 0;
  let lastSeen = numsWithIndex[0].num;

  // O(N)
  // every time we see a different number we update the num of found less than to be the index
  // result:
  // num              - 1,2,2,3,8
  // index            - 1,2,3,4,0
  // numFoundLessThan - 0,1,1,3,4
  const numLessThans = numsWithIndex.map((numObj, index) => {
    if (numObj.num !== lastSeen) {
      numFoundLessThan = index;
    }

    lastSeen = numObj.num;
    numObj.numFoundLessThan = numFoundLessThan;
    return numObj;
  });

  // O(NlogN)
  // restore the original order
  // result:
  // num              - 8,1,2,2,3
  // index            - 0,1,2,3,4
  // numFoundLessThan - 4,0,1,1,3
  numLessThans.sort((numObjA, numObjB) => numObjA.index - numObjB.index);

  // O(N)
  // remove the extra data
  // result:
  // 4,0,1,1,3
  return numLessThans.map(numObj => numObj.numFoundLessThan);
}

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description Produce a map of the counts
 * @summary O(NlogN)
 *
 * Runtime: 72 ms, faster than 87.49% of JavaScript online submissions
 * Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions
 */
function smallerNumbersThanCurrentSortedAltSimplified(nums) {
  const sortedNums = nums.slice(0).sort((num1, num2) => num2 - num1); // O(NlogN) (basically)
  const sortedNumsWithCounts = sortedNums.map((num, index) => [num, nums.length - index - 1]); // O(N)
  const lessThanMap = new Map(sortedNumsWithCounts); // O(N)
  return nums.map(num => lessThanMap.get(num)); // O(N)
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentReducer([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentSorted([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentSortedAlt([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentSortedAltSimplified([8, 1, 2, 2, 3]));
