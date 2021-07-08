function solution(board) {
  let answer = 0;
  const queue = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = board.length;

  outerLoop: for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        DFS(i, j);
        break outerLoop;
      }
    }
  }

  function DFS(x, y) {
    board[x][y] = -1;
    queue.push([x, y]);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || nx >= n) continue;
      if (board[nx][ny] === 1) DFS(nx, ny);
    }
  }

  outerLoop: while (queue.length) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= n || nx >= n) continue;

        if (board[nx][ny] === 1) break outerLoop;

        if (board[nx][ny] === 0) {
          board[nx][ny] = -1;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1],
  ])
);
