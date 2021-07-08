const solution = (arr, budget) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const prices = arr.map(
      // eslint-disable-next-line no-confusing-arrow
      ([value, postFea], index) => index === i ? value / 2 + postFea : value + postFea
    ).sort((a, b) => a - b);

    let cnt = 0;
    let totalPrice = 0;
    for (let j = 0; j < prices.length; j++) {
      if (totalPrice > budget) break;
      totalPrice += prices[i][j];
      cnt++;
    }

    max = Math.max(max, cnt);
  }

  return max - 1;
};

console.log(
  solution([
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]], 28)
);
