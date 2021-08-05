function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  A.sort((a, b) => a - b);

  const sequence = Array.from({ length: A.length }, ((_, index) => index + 1));

  for (let i = 0; i < A.length; i++) {
    answer += Math.abs(A[i] - sequence[i]);

    if (answer > 1000000000) return -1;
  }

  return answer;
}

console.log(solution([1]));
