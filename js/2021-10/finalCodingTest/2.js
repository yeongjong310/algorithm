function solution(nums) {
  const answer = nums;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0 && nums[i + 1] < 0) {
      nums[i] - nums[i + 1] > 0 ? answer.splice(i, 1) : answer.push(i + 1, 1);
    }
  }

  return answer;
}

console.log(solution([-2, -1, 2, 1, -3, 2]));

//[-2, -1, 2, -3, 2]
