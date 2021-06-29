function solution(s) {
  let answer = 0;
  for (let c of s) {
    if (65 <= c.charCodeAt() && c.charCodeAt() <= 90) ++answer;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
