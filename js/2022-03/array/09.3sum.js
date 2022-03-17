const threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  const resultSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    let before = i + 1;
    let after = nums.length - 1;

    while (before < after) {
      const sum = nums[i] + nums[before] + nums[after];
      if (sum === 0) {
        const comb = [nums[i], nums[before], nums[after]];

        if (!resultSet.has(comb.toString())) {
          result.push(comb);
        }

        resultSet.add(comb.toString());
        after--;
      } else if (sum < 0) {
        before++;
      } else {
        after--;
      }
    }
  }

  return result;
};
