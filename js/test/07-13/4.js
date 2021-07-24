function solution(nums, d, k) {
  let answer = 0;
  const arr = [];
  const bits = Array.from({ length: d + 1 }, () => 0);
  bits[1] = 1;

  for (let i = 2; i < d + 1; i++) {
    bits[i] = bits[i - 1] * 2;
  }

  const stBits = nums.map(arr => arr.reduce((acc, cur) => acc + bits[cur], 0));

  const useState = Array.from(d + 1).fill(false);

  function combination(startIndex) {
    if (arr.length === k) {
      const bit = arr.reduce((acc, cur) => acc + bits[cur], 0);
      let tempAnswer = 0;
      for (const stBit of stBits) {
        if ((stBit & bit) === stBit) {
          tempAnswer++;
        }
      }
      answer = Math.max(tempAnswer, answer);
      return;
    }
    for (let i = startIndex; i <= d; i++) {
      if (useState[i]) continue;

      arr.push(i);
      useState[i] = true;
      combination(i + 1);
      arr.pop();
      useState[i] = false;
    }
  }

  combination(1);

  return answer;
}

console.log(
  solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)
);
