// O(n^2)
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const complementIndex = nums.slice(i + 1).indexOf(complement);

      if (complementIndex !== -1) {
        return [i, i + 1 + complementIndex];
      }
    }
  }
};

// O(n)
const twoSum2 = function (nums, target) {
  const nums_map = {};

  nums.forEach((_, i) => {
    nums_map[nums[i]] = i;
  });

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (nums_map[complement] && i !== nums_map[complement]) {
      return [i, nums_map[complement]];
    }
  }
};

// O(n)
const twoSum3 = function (nums, target) {
  const sortedNums = nums
    .map((num, index) => [num, index])
    .sort(([numA], [numB]) => numA - numB);

  let pointA = 0;
  let pointB = sortedNums.length - 1;

  while (pointA < pointB) {
    if (sortedNums[pointA][0] + sortedNums[pointB][0] === target) {
      return [sortedNums[pointA][1], sortedNums[pointB][1]];
    } else if (sortedNums[pointA][0] + sortedNums[pointB][0] < target) {
      pointA++;
    } else {
      pointB--;
    }
  }
};
