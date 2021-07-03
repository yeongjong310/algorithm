const solution = n => {
  let answer = "";

  const recursive  = num => {
    if (num > n) return;
    answer += num + " ";
    recursive(num + 1);
  };

  recursive(1);

  return answer;
}
console.log(solution(3));