// function solution(s) {
//   let answer = s;
//   answer = answer.replace(/A/g, '#');
//   return answer;
// }

function solution(s) {
  let answer = s;
  return Array.prototype.map.call(s, char => char === 'A' ? '#' : char).join('');
}

let str = "BANANA";
console.log(solution(str));
