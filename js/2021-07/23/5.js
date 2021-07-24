function solution(nums) {
  let answer = 0;

  const sequence = [];
  const visited = Array(nums).fill(false);

  const dfs = startIndex => {
    for (let i = startIndex; i < nums.length; i++) {
      console.log(i, sequence);
      if (visited[i]) continue;

      if (i === nums.length - 1) {
        answer = Math.max(answer, sequence.length);
        return;
      }

      if (sequence.length <= 1) sequence.push(nums[i]);
      else if (nums[i] - sequence[sequence.length - 1] === sequence[1] - sequence[0]) sequence.push(nums[i]);

      visited[i] = true;

      dfs(startIndex + 1);

      visited[i] = false;

      sequence.pop();
    }
  };

  dfs(0);

  return answer;
}

console.log(solution([1, 2, 3, 5, 7, 8, 9]));
