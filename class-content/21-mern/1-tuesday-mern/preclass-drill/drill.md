# Pre-class Drill

- Sign in to [codewars](https://www.codewars.com)

- Solve [this problem](https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript)


So! The problem above is worded slightly differently from what is ideal to show off the concept of recursion. Instead, we are going to find the value of an arbitrary location in Pascal's triangle, given the row and column.  

Pascal's Triangle:

          1
        1   1
      1   2   1
    1   3   3   1
  1   4   6   4   1
1   5   10  10  5   1
...etcetera


const pascalNum(row, col){
  if (col === 0 || col === row - 1) return 1;
  if (col === 1 || col + 1 === row) return row;
  return pascalNum(row -1, col -1) + pascalNum(row - 1, col);
}