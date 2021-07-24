function solution(nums, h) {

  let answer = 100000000;
  let l = 1;
  let r = 100000000;

  while (l <= r) {

    const mid = Math.floor((l + r) / 2);
    const sumHour = nums.map(num => Math.ceil(num / mid))
      .reduce((acc, cur) => acc + cur, 0);
    if (sumHour > h) {

      l = mid + 1;

    } else {

      if (sumHour === h) {

        answer = Math.min(answer, mid);

      }
      r = mid - 1;

    }

  }
  return answer;

}

console.log(solution([29, 12, 24, 5, 19], 6));

Number.MAX_SAFE_INTEGER