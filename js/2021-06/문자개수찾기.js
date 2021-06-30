function solution(str, target) {
  let answer = 0
  let pos = str.indexOf(target);
  while (pos !== -1) {
    answer += 1;
    pos = str.indexOf(target, pos + 1);
  }
  return answer;
}

console.log(solution('ababa', 'a'));