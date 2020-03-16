'use strict';

/**
 * @param {string} s
 * @return {number}
 * Generates the balanced strings and then prints the length of that set of balanced strings
 *
 * Runtime: 56 ms, faster than 69.86% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 37.7 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.
 */
function balancedStringSplit(s) {
  const output = [];
  let currentStr = ``;
  let depthCount = 0;
  for(const letter of s) {
    currentStr += letter;
    if(currentStr.charAt(0) === letter) {
      ++depthCount;
    } else {
      --depthCount;
    }
    if(depthCount === 0) {
      output.push(currentStr);
      currentStr = ``;
    }
  }
  return output.length;
}

/**
 * @param {string} s
 * @return {number}
 * We don't need an output array since all we care about is the length
 * Instead we can track this using a simple counter (numBalancedStrings)
 *
 * Runtime: 48 ms, faster than 95.59% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.
 */
function balancedStringSplitSmallerSpace(s) {
  let numBalancedStrings = 0;
  let currentStr = ``;
  let depthCount = 0;
  for(const letter of s) {
    currentStr += letter;
    if(currentStr.charAt(0) === letter) {
      ++depthCount;
    } else {
      --depthCount;
    }
    if(depthCount === 0) {
      ++numBalancedStrings;
      currentStr = ``;
    }
  }
  return numBalancedStrings;
}

/**
 * @param {string} s
 * @return {number}
 * We don't need an output array since all we care about is the length
 * Instead we can track this using a simple counter (numBalancedStrings)
 *
 * Runtime: 56 ms, faster than 69.86% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.
 */
function balancedStringSplitConstantSpace(s) {
  let numBalancedStrings = 0;
  let currStartLetter = ``;
  let depthCount = 0;
  for (const letter of s) {
    if (currStartLetter === ``) {
      currStartLetter = letter;
    }

    if(currStartLetter === letter) {
      ++depthCount;
    } else {
      --depthCount;
    }

    if(depthCount === 0) {
      ++numBalancedStrings;
      currStartLetter = ``;
    }
  }
  return numBalancedStrings;
}

/**
 * @param {string} s
 * @return {number}
 * We don't need to know the start letter either
 * Instead we can track how far "off track" by assigning each letter a positive or negative value
 *
 * Runtime: 56 ms, faster than 69.86% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.
 */
function balancedStringSplitConstantSpaceSimple(s) {
  let numBalancedStrings = 0;
  let depthCount = 0;
  for (const letter of s) {
    if (letter === `L`) {
      ++depthCount;
    } else {
      --depthCount;
    }

    if(depthCount === 0) {
      ++numBalancedStrings;
    }
  }
  return numBalancedStrings;
}

balancedStringSplit(`RLRRLLRLRL`);
balancedStringSplitSmallerSpace(`RLRRLLRLRL`);
balancedStringSplitConstantSpace(`RLRRLLRLRL`);
balancedStringSplitConstantSpaceSimple(`RLRRLLRLRL`);
