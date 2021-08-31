function solution(board, table) {
  const pieces1 = collect(board, 0).map(normalize);
  console.log(pieces1);
}

function collect(table, n) {
  return table.flatMap((row, y) => {
    console.log(row);
    return row.map((_, x) => table[y][x] === n && traverse(x, y)).filter(Boolean);
  });

  function traverse(x, y, arr = []) {
    if (table[y][x] !== n) return;
    table[y][x] = ~n; // 0 => -1, 1 => -2
    arr.push([x, y]);
    if (x > 0) traverse(x - 1, y, arr);
    if (x < table[0].length - 1) traverse(x + 1, y, arr);
    if (y > 0) traverse(x, y - 1, arr);
    if (y < table.length - 1) traverse(x, y + 1, arr);
    return arr;
  }
}

function normalize(points) {
  let yMin = Infinity;
  let xMin = Infinity;
  points.forEach(([x, y]) => {
    xMin = Math.min(xMin, x);
    yMin = Math.min(yMin, y);
  });
  points.forEach(pt => {
    pt[0] -= xMin;
    pt[1] -= yMin;
  });
  return points.sort();
}

const game_board = [
  [1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 0, 1],
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0]];

const table = [
  [1, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0]];

console.log(solution(game_board, table)); // 14