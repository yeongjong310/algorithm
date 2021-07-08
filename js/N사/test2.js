function solution(block, board) {
    let answer = 0;

    const blocks = {
        0: [[1],
            [1],
            [1]],

        1: [[1, 1, 1]],

        2: [[1, 0],
            [1, 1]],

        3: [[0, 1],
            [1, 1]],

        4: [[1, 1],
            [0, 1]],

        5: [[1, 1],
            [1, 0]]
    }

    const block = blocks[block];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            for (let k = 0; k < block.length; k++) {
                if (board[i][j] === 0) {
                    
                }
            }
        }
    }

    return answer;
}

solution(0, [
    [1,0,0,0],
    [1,0,0,1],
    [1,1,0,1],
    [1,1,0,1]
]);