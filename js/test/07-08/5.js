function solution(times, k) {
  times.unshift(0);
  let rest = times.length - 1;
  const st = [...times];
  st.sort((a, b) => a - b); // [0, 2, 5, 7, 8 ,9, 10]

  for (let i = 1; i < st.length; i++) {
    const cycleTime = rest * ((st[i] - st[i - 1]));

    if (cycleTime <= k) {
      k -= cycleTime;
      rest--;
    } else {
      const restTime = k % rest;
      let cnt = 0;
      for (let j = 1; j < times.length; j++) {
        if (times[j] >= st[i]) {
          console.log(j, i);
          if (cnt === restTime) return j;
          cnt++;
        }
      }
    }
  }
  return -1;
}

console.log(solution([8, 5, 2, 9, 10, 7], 32)); // 3

