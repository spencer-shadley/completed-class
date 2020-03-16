'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description nested loop through the numbers, counting how many times a number is found to be smaller
 * @summary O(N^2) because it loops through all numbers twice
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

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentReducer([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrentSorted([8, 1, 2, 2, 3]));
