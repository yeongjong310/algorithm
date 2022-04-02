const numIslands = function (grid) {
  let result = 0;
  const DIRECTION = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // up, right, down, left;
  const stack = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        console.log(i, j);
        stack.push([i, j]);
        result++;
      }

      while (stack.length !== 0) {
        const [x, y] = stack.pop();

        for (const [dx, dy] of DIRECTION) {
          if (grid[x + dx]?.[y + dy] == 1) {
            grid[x + dx][y + dy] = 0;
            stack.push([x + dx, y + dy]);
          }
        }
      }
    }
  }

  return result;
};
