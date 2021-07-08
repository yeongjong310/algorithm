const solution = (n, arr) => {
  let answer = 0;
  let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0));
  let visited = Array(n+1).fill(false);
  const startVertex = 1;

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  };

  const DFS = curVertex => {
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
  }

  visited[startVertex] = true;
  DFS(startVertex);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
