function solution(nums, m) {
  let lt = 0;
  let rt = 0;
  let answer = 0;
  let subArr = [];

  while (rt <= nums.length) {
    if (rt !== nums.length) {
      subArr.push(nums[rt]);
    }

    if (sum <= m) answer += 1;

    while (sum > m) {
      sum /= nums[lt++];
      if (sum <= m) {
        console.log('sum', sum, 'r', rt, 'l', lt, 'answer', answer);
      }
    }
    rt++;
  }
  return answer;
}

console.log([1, 2, 1, 1, 2], 2);