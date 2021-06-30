function solution(s){  
  let answer="";
  for(let c of s){
    if (answer.indexOf(c) !== -1) continue
    answer += c;
  }
  return answer;
}
console.log(solution("ksekkset"));