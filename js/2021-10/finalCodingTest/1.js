function combination(n, r) {
  let answer = 1;

  for (let i = n; i >= (n - r + 1); i--) {
    answer *= i;
  }

  for (let i = 1; i <= r; i++) {
    answer /= i;
  }

  return answer;
}

function solution(nums, m) {
  let lt = 0;
  let rt = 0;
  let answer = 0;
  let sum = 1;

  while (rt <= nums.length) {
    if (rt !== nums.length) {
      sum *= nums[rt];
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

let a = [2, 3, 3, 2, 5];

console.log(solution(a, 20));