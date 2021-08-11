function solution(numbers, target) {
  let answer = 0;

  const def = (sum, level) => {
    if (level === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    def(sum + numbers[level], level + 1);
    def(sum - numbers[level], level + 1);
  };

  def(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
