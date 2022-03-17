// 나눗셈 풀이
// 문제에서 제한한 풀이

const productExceptSelf1 = function (nums) {
  if (nums.filter((num) => num === 0).length > 1) {
    return Array(nums.length).fill(0);
  } else {
    const multipleAll = nums.reduce((acc, cur) => acc * cur, 1);
    const result = nums.map((num) => multipleAll / num);

    if (nums.filter((num) => num === 0).length === 1) {
      const zeroIndex = nums.indexOf(0);
      result[zeroIndex] = nums.reduce(
        (acc, cur, index) => (index !== zeroIndex ? acc * cur : acc),
        1
      );
    }

    return result;
  }
};

// 누적 곱셈 방식

var productExceptSelf2 = function (nums) {
  const leftMultiple = Array(nums.length).fill(1);
  const rightMultiple = [...leftMultiple];

  nums.forEach((num, index) => {
    if (index !== 0) {
      leftMultiple[index] = leftMultiple[index - 1] * num;
      rightMultiple[rightMultiple.length - index - 1] =
        rightMultiple[rightMultiple.length - index] *
        nums[nums.length - index - 1];
    } else {
      leftMultiple[index] = nums[0];
      rightMultiple[rightMultiple.length - 1] = nums[nums.length - 1];
    }
  });

  return nums.map((num, index) => {
    if (index === 0) {
      return rightMultiple[index + 1];
    } else if (index === nums.length - 1) {
      return leftMultiple[index - 1];
    } else {
      return leftMultiple[index - 1] * rightMultiple[index + 1];
    }
  });
};
