function solution(s1, s2){
  let answer=0;

  const dp = Array.from(
    {length: s1.length},
    () => Array(s1.length).fill(0)
  );

  console.log(dp);
  return answer;
}

console.log(solution("aabab", "babb")); // 2