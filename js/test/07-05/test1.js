// 송아지 잡기 

function solution(s, e) {
  var answer = 0;
  const moves = [5, 1 ,-1];

  let dp = Array.from(Array(10000), (_, i) => {
    if (i < s) {
      return s - i;
    }

    else if (i % 5 === s % 5) {
      return (i / 5 - s / 5)
    }

    else return 0;
  });

  // console.log(dp);

  function recursive (i) {
    if (dp[i]) return dp[i];
    if (i > 10000) return 10000;
    if (i < 1) return 10000;

    dp[i] = Math.min(dp[i + 5] || recursive(i + 5) +
                     dp[i + 1] || recursive(i + 1) +
                     dp[i - 1] || recursive(i - 1)) + 1;
  };

  recursive(e);
  return dp[e];

}

console.log(solution(5, 14)); // 3


// function solution(s, e) {
//   var answer = Number.MAX_SAFE_INTEGER;
//   let moves = [1, -1, 5];
//   if (s > e) {
//     moves = [-1, 1, 5];
//   };

//   const jump = (hs, jumpCount) => {
    
//       if (hs < 1 || hs > 10000 ) return;
//       if (hs === e) {
//           answer = Math.min(answer, jumpCount);
//           return
//       }
//       for (let move of moves) {
//           if (jumpCount >= answer) continue;
//           jump(hs + move, jumpCount + 1);
//       }
//   }
//   jump(s, 0);
//   return answer;
// }

// console.log(solution(14, 5)); // 3