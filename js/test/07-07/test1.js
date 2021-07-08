function solution (sequence) {
  const dp = Array(sequence.length).fill(1);
  const pa = Array(sequence.length).fill(-1);
  for (let i = 0; i < sequence.length; i++) {
    for (let j = i; j < sequence.length; j++) {
      if (sequence[i] < sequence[j]) {
        if (dp[i] + 1 > dp[j]) {
          dp[j] = dp[i] + 1;
          pa[j] = i;
        }
      }
    }
  }

  let answer = "";

  function print (i) {
    if (pa[i] === -1) return;

    print(pa[i]);
    answer += sequence[i];
  }

  print(Math.max(...pa))

  return answer;
}

console.log(solution([5, 3, 7, 8 ,6 ,2, 9, 4]));