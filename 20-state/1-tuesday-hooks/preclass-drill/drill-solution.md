got an array of ints
find smallest diff

sort it
compare neighbors
choose smallest diff
```js
function minimumAbsoluteDifference(arr) {
  const sorted = arr.sort();
  let output = infinity;


  <!-- return arr.sort().reduce((res, num, i, array) => {
            const diff = Math.abs(num - array[i + 1]);
            if (diff < res) return diff;
            return res;
          }, infinity) -->
} ```