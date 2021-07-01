function solution(n, arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let num of arr) {
    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (max < sum) max = sum;
  }
  return max;
};

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
