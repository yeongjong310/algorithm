const solution = n => {
  let answer = "";
  const recursive  = n => {
    if (n === 1) {
      answer = 1 + answer;
      return;
    }
    answer = n % 2 + answer;
    recursive(Math.floor(n / 2));
  };

  recursive(n);

  return answer;
}
console.log(solution(11));