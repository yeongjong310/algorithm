// function solution(cans) {
//   var min = Number.MAX_SAFE_INTEGER;

//   const recursive = (i, white, black) => {
//       if (i === cans.length) {
//           // console.log(Math.abs(white - black))
//           min = Math.min(min, Math.abs(white - black));
//           return;
//       }

//       recursive(i+1, white + cans[i][0], black);
//       recursive(i+1, white, black + cans[i][1]);
//   }

//   recursive(0, 0, 0);

//   return min;
// }

function solution(nums, count) {
  const answer = [];
  let len = nums.length;
  let arr = [];

  const DFS = startIndex => {
    if (arr.length === count) {
      answer.push([...arr]);
      return;
    }
    for (let i = startIndex; i < len; i++) {
      arr.push(nums[i]);
      DFS(i + 1);
      arr.pop();
    }
  };
  DFS(0);
  return answer;
}

console.log(solution([2, 7, 9, 8, 5]));
