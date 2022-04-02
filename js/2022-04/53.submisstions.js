// 각 index가 마지막 숫자라고 가정하고, 왼쪽의 subarray의 최대 subarray에 해당 숫자를 더하는게 최대인가 아닌지를 구분한다.
// 더한 값이 최대라면 subarray + index를 포함한 수가 그 자리를 기준으로 최대가 된다.
// 더한 값이 최대가 아니라면 해당 숫자를 기준으로 다시 subarray를 시작한다.

var maxSubArray = function (nums) {
  let dp = Array(nums.length).fill(null);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
};
