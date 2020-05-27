// got an array of ints
// find smallest diff

// sort it
// compare neighbors
// choose smallest diff

function minimumAbsoluteDifference(arr) {
  return arr.sort().reduce((res, num, i, array) => {
    const diff = Math.abs(num - array[i + 1]);
    if (diff < res) return diff;
    return res;
  }, Infinity);
}