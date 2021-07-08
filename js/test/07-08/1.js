function solution(nums, k) {
  const answer = [];
  const profitTable = new Map();
  let left = 0;
  let right = k;

  for (let i = left; i < right; i++) {
    profitTable.set(nums[i], profitTable.get(nums[i]) + 1 || 1);
  }

  while (right <= nums.length) {
    answer.push(profitTable.size);

    if (right === nums.length) break;

    profitTable.set(nums[left], profitTable.get(nums[left]) - 1);
    profitTable.set(nums[right], profitTable.get(nums[right]) + 1 || 1);

    if (profitTable.get(nums[left]) === 0) profitTable.delete(nums[left]);

    left++;
    right++;
  }

  return answer;
}

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));

// function solution(nums, k) {
//   const answer = [];
//   const profitTable = {};
//   let left = 0;
//   let right = k;
  
//   for (let i = left; i < right; i++) {
//       profitTable[nums[i]] = profitTable[nums[i]] + 1 || 1;
//   }

//   while (right <= nums.length) {
//       answer.push(Object.keys(profitTable).length);

//       if (right === nums.length) break;

//       profitTable[nums[left]] -= 1;
//       profitTable[nums[right]] = profitTable[nums[right]] + 1 || 1;
      
//       if (profitTable[nums[left]] === 0) delete profitTable[nums[left]];
      
//       left++;
//       right++;
//   }
  
//   return answer;
// }