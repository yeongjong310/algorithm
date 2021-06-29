function solution(a, b, c){
  let answer="YES"
  const sum = a + b + c;
  const maxSide = Math.max(a,b,c);

  if ((maxSide * 2 -(sum) ) > 0) answer="NO";
  return answer;
}

console.log(solution(13, 33, 17));