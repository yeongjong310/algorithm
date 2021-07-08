function solution(s1, s2) {
  let dp = Array.from(
      {length: s1.length}, 
      () => Array(s2.length).fill(0)
  );
  
  for (let i = 1; i < s1.length; i++) {
      for (let j = 1; j < s2.length; j++) {
          if (s1[i] === s2[j]) {
              dp[i][j] = dp[i-1][j-1] + 1;
          }
      }
  };
  return Math.max(...dp.map(arr => Math.max(...arr)));
}

console.log(solution('abcba', 'acbae')); // 3;