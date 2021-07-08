// 스택으로 풀 수 있다.
// 괄호 같은 경우 스택을 순서대로 쌓으면, 
// ")"를 만나서 빠져나왔을 때, 다음에 빠져나올 "("와 문조건 쌍을 이룸

function solution(s) {
  let answer = '';
  
  const recursive = startIndex => {
      let j = startIndex;
      while (s[j] !== ')') {
          if (s[j] === '(') {
              recursive(j);
          }
          answer += s[j];
          j++;
      }
      
  }
  for (let i = 0; i < s.length; i++) {
      if (!Number.isNaN(+s[i])) continue; // 숫자
      if (s[i] === '(') {
          let j = i + 1;
          recursive(j);
      }
      answer += s[i];
  }
  return answer;
}