const getOptimalSum = (weightPermission, weightPuppies) => {
  let max = Number.MIN_SAFE_INTEGER;

  const _getOptimalSum = (i, sum) => {
    if (sum > weightPermission) return;

    if (i === weightPuppies.length) {
      max = Math.max(max, sum)

      return;
    }

    _getOptimalSum(i + 1, sum + weightPuppies[i]);
    _getOptimalSum(i + 1, sum);

  }

  _getOptimalSum(0, 0);

  return max;
}

const WEIGHTPUPPIES = [81, 58, 42, 33, 61];
console.log(getOptimalSum(259, WEIGHTPUPPIES));
