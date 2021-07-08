function solution(coins, m) {
  let answer = 0;
  const arr = [];
  let flag = false;
  const recursive = (index, sum) => {
      if (sum >= m) {
        flag = true;
        console.log(arr);
          if (sum === m) {
              answer++;
          }
          return;
      }

      for (let i = index; i < coins.length; i ++) {
          if (flag) continue;
          arr.push(coins[i]);
          recursive(i, sum + coins[i]);
          arr.pop();
      }
      flag = false;
  }

  recursive(0, 0);

  return answer;
}

console.log(solution([2, 3, 5], 10));