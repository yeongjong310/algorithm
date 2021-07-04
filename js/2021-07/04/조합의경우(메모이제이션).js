const solution = (n, r) => {
  const memo = Array.from(Array(n + 1), () => Array(r + 1).fill(-1));

  const combination = (n, r) => {
    if (r === 0 || n === r) return 1;
    if (n < r) return 0;
    if (memo[n][r] !== -1) return memo[n][r];

    memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);

    return memo[n][r]
  };

  return combination(n, r);
};

console.log(solution(33, 19));
