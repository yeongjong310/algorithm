const sumDigits = nums => {

  let answer = nums[0];
  let max = Number.MIN_SAFE_INTEGER;

  nums.map(num => (num + '').split('')
    .reduce((acc, cur) => +acc + +cur, 0))
    .forEach((v, i) => {

      if (max <= v) {

        max = v;
        answer = Math.max(answer, nums[i]);

      }

    });

  return answer;

};

console.log(sumDigits([128, 460, 603, 40, 621, 137, 123]));
