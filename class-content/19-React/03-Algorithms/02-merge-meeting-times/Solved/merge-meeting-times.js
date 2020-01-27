'use strict';

// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

const mergeMeetingTimes = function(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr));
  const sortedArr = arrCopy.sort((a, b) => a[0] - b[0]);

  const result = [sortedArr[0]];

  for (const i = 1; i < sortedArr.length; ++i) {
    const lastMeeting = result[result.length - 1];
    const currentMeeting = sortedArr[i];

    if (lastMeeting[1] >= currentMeeting[0]) {
      if (lastMeeting[1] < currentMeeting[1]) {
        lastMeeting[1] = currentMeeting[1];
      }
    } else {
      result.push(currentMeeting);
    }
  }

  return result;
};
