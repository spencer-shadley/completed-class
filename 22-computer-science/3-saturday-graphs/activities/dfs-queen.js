// based on https://www.hackerrank.com/challenges/queens-attack-2/problem

'use strict';

const queenExample = {
    x: 2,
    y: 1
};

const pieceType = {
    QUEEN: `queen`,
    EMPTY: `empty`,
    BLOCK: `block`
};

const boardExample = [
    [pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY],
    [pieceType.EMPTY, pieceType.EMPTY, pieceType.BLOCK, pieceType.EMPTY],
    [pieceType.BLOCK, pieceType.QUEEN, pieceType.EMPTY, pieceType.EMPTY],
    [pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY, pieceType.EMPTY]
];

function initializeStack(queen) {
    const stack = [];
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

function DFS(queen, board) {
    const stack = initializeStack(queen);

    let count = 0;
    while (stack.length !== 0) {
        const move = stack.pop();
        const x = move.location.x + move.direction.x;
        const y = move.location.y + move.direction.y;
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

const count = DFS(queenExample, boardExample);
console.log(count === 8, count);
