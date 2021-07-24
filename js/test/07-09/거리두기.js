const solution = arr => {
  const distance = [];
  let p = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 1) {
      p = 0;
      distance[i] = p;
    } else {
      distance[i] = ++p;
    }
  }
  console.log(distance);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (+arr[i] === 1) {
      p = 0;
    } else {
      distance[i] = Math.min(distance[i], ++p);
    }
  }

  console.log(distance);

  return Math.max(...distance);
};

console.log(solution('10010100000'));
