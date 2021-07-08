const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n), () => Array(n).fill(0));

  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  const DFS = (curVertex) => {
    if (curVertex === n) {
      answer++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (graph[curVertex][i] === 0 || visited[i] === true) continue;

      visited[i] = true;
      DFS(i);
      visited[i] = false;
    }
  };

  visited[startVertex] = true;
  DFS(0, 0);

  return answer;
};

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
