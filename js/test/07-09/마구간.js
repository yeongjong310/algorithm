const solution = (arr, cnt) => {
  arr.sort((a, b) => a - b);

  let l = arr[0];
  let r = arr[arr.length - 1] - l;

  function count(mid) {
    let cnt = 1;
    let ep = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - ep >= mid) {
        cnt++;
        ep = arr[i];
      }
    }

    return cnt;
  }

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (count(mid) >= cnt) l = mid + 1;
    else r = mid - 1;
  }

  return l - 1;
};

console.log(solution([1, 2, 8, 4, 9], 3)); // 3
