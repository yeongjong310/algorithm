function solution(num) {
  let answer = 0;
  const arr = Array.from({ length: Math.ceil(num / 2) + 1 }, (_, i) => i);

  let l = 1;
  let r = 1;
  let sum = arr[r];

  while (r < arr.length) {
    if (sum <= num) {
      sum += arr[++r];
    } else {
      sum -= arr[l++];
    }
    if (sum === num) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(15));
