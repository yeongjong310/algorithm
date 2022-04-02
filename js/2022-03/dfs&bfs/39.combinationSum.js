const combinationSum = function (candidates, target) {
  const result = [];

  function combination(index, sum, arr) {
    if (sum >= target) {
      if (sum === target) result.push(arr);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      combination(i, sum + candidates[i], [...arr, candidates[i]]);
    }
  }

  combination(0, 0, []);

  return result;
};
