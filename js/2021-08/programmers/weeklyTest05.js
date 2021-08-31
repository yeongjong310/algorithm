function solution(word) {
  let answer = 0;

  const chars = ['A', 'E', 'I', 'O', 'U'];
  const words = [];
  let flag = false;

  const dfs = () => {
    if (words.join('') === word) flag = true;

    if (flag || words.length >= 5) return;

    for (let i = 0; i < chars.length; i++) {
      if (flag) return;
      const char = chars[i];

      words.push(char);
      answer++;

      dfs();

      words.pop();
    }
  };

  dfs();

  return answer;
}

console.log(solution('AAAAE')); // 6
console.log(solution('AAAE')); // 10
console.log(solution('I')); // 1563
