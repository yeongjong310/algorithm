// 내 풀이가 dfs로 먼저 찍고 계산하는 방식. => 1000원만 돼도 경우의 수가 너무 많아짐.

// dp로 풀이 가능.
// 주의 사항; 2번 코인을 전부 계산하고 그 다음코인으로 넘어가야 순열이 아닌 조합으로 됨.
// => 테이블 만들어 보기

const solution = (coins, sum) => {
  let answer = 0;
  const dp = Array(sum + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < sum + 1; i++) {
      for (let coin of coins) {
        if (i - coin < 0) continue;
        dp[i] += dp[i - coin];
    }
  }
  return dp[dp.length - 1];
}
console.log(solution([2, 3, 5], 10)); // 14