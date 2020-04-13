// based on https://www.hackerrank.com/challenges/queens-attack-2/problem

let queen = {
    x: 2,
    y: 1
};

let pieceType = {
    QUEEN: 'queen',
    EMPTY: 'empty',
    BLOCK: 'block'
}

let board = [
    [pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY],
    [pieceType.EMPTY, pieceType.EMPTY, pieceType.BLOCK, pieceType.EMPTY],
    [pieceType.BLOCK, pieceType.QUEEN, pieceType.EMPTY, pieceType.EMPTY],
    [pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY],
];

function initializeStack(queen) {
    let stack = [];
    for (let x = -1; x <= 1; ++x) {
        for (let y = -1; y <= 1; ++y) {
            if (x !== 0 || y !== 0) {
                stack.push({
                    direction: { x, y },
                    location: { x: queen.x, y: queen.y }
                });
            }
        }
    }
    return stack;

    // alternative:
    // return [
    // {direction: {x: 0, y: 1}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: 0, y: -1}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: 1, y: 0}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: 1, y: 1}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: 1, y: -1}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: -1, y: 0}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: -1, y: -1}, location: {x: queen.x, y: queen.y}}, 
    // {direction: {x: -1, y: 1}, location: {x: queen.x, y: queen.y}}];
}

function withDFS(queen, board) {
    let stack = initializeStack(queen);

    let count = 0;
    while (stack.length !== 0) {
        let move = stack.pop();
        let x = move.location.x + move.direction.x;
        let y = move.location.y + move.direction.y;
        if (isInBounds(x, y, board.length) && !isBlocked(x, y, board)) {
            ++count;
            stack.push({direction: move.direction, location: {x, y}});
        }
    }
    return count;
}

function isInBounds(x, y, boardLength) {
    return x >= 0 && x < boardLength &&
        y >= 0 && y < boardLength;
}

function isBlocked(x, y, board) {
    return board[x][y] === pieceType.BLOCK;
}

let count = withDFS(queen, board);
console.log(count === 8, count);
