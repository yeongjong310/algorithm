// function solution(nums, k) {
//   let l = 0;
//   let r = 0;
//   let changeCount = 0;
//   let max = 0;

//   while (l <= nums.length - 1 && r <= nums.length - 1) {
//     if (nums[r] === 0) {
//       if (changeCount === k) {
//         if (nums[l] === 2) {
//           changeCount--;
//         }

//         l++;
//       } else {
//         nums[r++] = 2;
//         changeCount++;
//       }
//     } else {
//       r++;
//     }
//     max = Math.max(max, r - l);
//   }

//   return max;
// }

function solution(nums, k) {
  let l = 0;
  let changeCount = 0;
  let max = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) changeCount++;

    while (changeCount > k) {
      if (nums[l] === 0) changeCount--;
      l++;
    }

    max = Math.max(max, r - l + 1);
  }

  return max;
}

console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2));
