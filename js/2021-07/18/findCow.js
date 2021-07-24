function solution(board) {
    function isValidArea(x, y) {
        return (x >= 10 || y >= 10 || x < 0 || y < 0);
    }
  let answer = 0;

  let hsX = 0;
  let hsY = 0;

  let cowX = 0;
  let cowY = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 'H') {
        hsX = i;
        hsY = j;
      }

      if (board[i][j] === 'C') {
        cowX = i;
        cowY = j;
      }
    }
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let hsD = 0;
  let cowD = 0;

  while (!(hsX === cowX && hsY === cowY)) {
    if (answer > 10) break;
    const newHsX = hsX + dx[hsD];
    const newHsY = hsY + dy[hsD];
    const newCowX = cowX + dx[cowD];
    const newCowY = cowY + dy[cowD];
    console.log(isValidArea(newHsX, newHsY));
    if (newHsX >= 10 || newHsY >= 10 || board[newHsX][newHsY] === '*') {
      hsD = (hsD + 1) % 4;
    } else {
      hsX = newHsX;
      hsY = newHsY;
    }

    if (newCowX >= 10 || newCowY >= 10 || board[newCowX][newCowY] === '*') {
      cowD = (cowD + 1) % 4;
    } else {
      cowX = newCowX;
      cowY = newCowY;
    }
    answer += 1;
  }
  return answer;
}

console.log(
  solution([
    '*,,,*,,,,,',
    ',,,,,,*,,,',
    ',,**,,,*,,',
    ',,,,,,,,,,',
    ',,,*,*,,,,',
    '*,,,,,*,*,',
    ',,,*,,,,,,',
    ',,*,,,,,H*',
    ',,,*,*,,C*',
    ',*,*,,,,,*',
  ])
);
