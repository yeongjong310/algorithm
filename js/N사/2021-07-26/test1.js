function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const countDigits = {};

  for (const number of A) {
    if (number <= A.length) countDigits[number] = countDigits[number] + 1 || 1;
  }

  for (const [key, value] of Object.entries(countDigits).reverse()) {
    if (+key === value) return value;
  }

  return 0;
}
console.log(solution([3,3,3,1,2,2,4,4,4,3,2,1]))