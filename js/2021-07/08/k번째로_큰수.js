function solution(arr, k) {
  const cases = new Set();
  const temp = [];

  const DFS = startIndex => {
    for (let i = startIndex; i < arr.length + 1; i++) {
      if (temp.length === 3) {
        cases.add(temp.reduce((arr, cur) => arr + cur, 0));
        return;
      }

      temp.push(arr[i]);
      DFS(i + 1);
      temp.pop();
    }
  };

  DFS(0);

  return Array.from(cases).sort((a, b) => b - a)[k - 1] || -1;
}

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
