function solution(coins, m) {
  let answer = 0;
  // let flag = false;
  
  const recursive = sum => {
      if (sum >= m) {
          // flag = true;
          if (sum === m) {
              answer++;
          }
          return;
      }

      for (let i = 0; i < coins.length; i ++) {
          // if(flag) continue;
          
          recursive(sum + coins[i]);
      };
      
      // flag = false;
  }

  recursive(0);

  return answer;
}