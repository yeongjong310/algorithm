function solution(coins, m) {
  let answer = 0;
  let flag = false;
  let arr = [];

  const recursive = sum => {
      if (sum >= m) {
          flag = true;
          if (sum === m) {
              answer++;
          }
          return;
      }

      for (let i = 0; i < coins.length; i++) {
          if (flag) continue;
          // arr.push(coins[i]);
          // console.log(arr);
          recursive(sum + coins[i]);
          // arr.pop();
      };

      flag = false;
  }

  recursive(0);

  return answer;
}

console.log(solution([2, 3, 5], 1000)); // 14