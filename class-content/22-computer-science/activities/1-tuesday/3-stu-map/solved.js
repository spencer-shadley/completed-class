/* eslint-disable no-unused-vars */
'use strict';

/**
 * O(N) (assuming a HashMap implementation of Map)
 *
 * Runtime: 68 ms
 *
 * @param {number[]} array
 * @return {number}
 */
function repeatedNTimes(array) {
    const counts = new Map();
    for(const element of array) {
        const currElementCount = counts.get(element);
        const updatedElementCount = currElementCount ? currElementCount + 1 : 1;
        counts.set(element, updatedElementCount);
    }

    for(const [element, count] of counts) {
        if(count === array.length / 2) {
            return element;
        }
    }
    return undefined;
}

/**
 * O(N^2)
 *
 * Runtime: 4340 ms
 *
 * @param {number[]} A
 * @return {number}
 */
function repeatedNTimesSlow(array) {
    const counts = [];
    for (const elementOuter of array) {
        let count = 0;
        for (const elementInner of array) {
            if (elementInner === elementOuter) {
                ++count;
            }
        }
        counts.push([elementOuter, count]);
    }

    for (const [element, count] of counts) {
        if (count === array.length / 2) {
            return element;
        }
    }
    return undefined;
}
