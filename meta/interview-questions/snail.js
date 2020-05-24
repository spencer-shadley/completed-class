// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
// TODO - complete

function snail(array) {
    let directions = ['right', 'down', 'left', 'up'];
    let visited = new Array(new Array());
    let snailed = new Array();

    let currentDirection = 0;
    let currRow = 0;
    let currCol = 0;
    while(snailed.length < array.length * array[0].length) {
        const [row, col] = traverseDirection(currRow, currCol, array, visited, directions[currentDirection], snailed);
        
        currRow = row;
        currCol = col;
        currentDirection = (currentDirection + 1) % directions.length;
    }
    return snailed;
}

function traverseDirection(row, col, array, visited, direction, snailed) {
    switch (direction) {
        case 'right':
            while (col < array[row].length && !visited[row][col]) {
                visited[row][col] = true;
                snailed.push(array[row][col]);
                ++col;
            }
            break;
        case 'down':
            while (row < array.length && !visited[row][col]) {
                visited[row][col] = true;
                snailed.push(array[row][col]);
                ++row;
                if (!visited[row]) {
                    visited[row] = new Array();
                }
            }
            break;
        case 'left':
            while (col >= 0 && !visited[row][col]) {
                visited[row][col] = true;
                snailed.push(array[row][col]);
                --col;
            }
            break;
        case 'up':
            while (row >= 0 && !visited[row][col]) {
                visited[row][col] = true;
                snailed.push(array[row][col]);
                --row;
            }
            break;
    }
    return [row, col];
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]
const actual = snail(arr);
console.log(actual === expected);
