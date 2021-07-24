const solution = (board, moves) => {
  let answer = 0;
  const stack = [];

  for (const x of moves) {
    for (const row of board) {
      if (row[x - 1] === 0) continue;

      if (stack[stack.length - 1] === row[x - 1]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(row[x - 1]);
      }

      row[x - 1] = 0;

      break;
    }
  }

  return answer;
};

console.log(solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
)); // 4
