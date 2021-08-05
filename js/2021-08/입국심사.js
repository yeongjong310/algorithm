function solution(n, times) {
  let answer = Number.MAX_SAFE_INTEGER;

  let l = 0;
  let r = Math.max(...times) * n;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const throughputN = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    if (throughputN >= n) {
      answer = Math.min(mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));
