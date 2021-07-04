const solution = (timeLimit, scores, times) => {
  let max = Number.MIN_SAFE_INTEGER;

  const recursive = (index, scoreAcc, timeAcc) => {
    if (timeAcc > timeLimit) return;

    if (index === scores.length) {
      max = Math.max(max, scoreAcc);
      return;
    }

    recursive(index + 1, scoreAcc + scores[index], timeAcc + times[index]);
    recursive(index + 1, scoreAcc, timeAcc);
  }

  recursive(0, 0, 0);

  return max;
};

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
