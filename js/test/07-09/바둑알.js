const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const N = 19;
const board = [];

for (let i = 0; i < input.length; i++) {
  board.push(input[i].split(' '));
}

const isValidPos = (x, y) => {
  if (x < 0 || y < 0 || x >= 19 || y >= 19) {
    return false;
  }

  return true;
}

const checkWinner = (() => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 1, 1, 1];

  const _checkWinner = (x, y) => {
    const color = board[x][y];

    for (let i = 0; i < 4; i++) {
      if (!isValidPos(x + dx[i], y + dy[i])) continue;

      for (let j = 0; j < 5; j++) {
        if (board[x + dx[i]][y + dy[i]] !== color) break;
      }
    }
  }

  return _checkWinner;
})();

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (board[x][y] === 0) continue;
    checkWinner(x, y);
  }
}

return 0;