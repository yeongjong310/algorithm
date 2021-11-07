function isPrime(number) {
  const num = Number(number);

  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  let answer = 0;
  const kNumber = n.toString(k);

  let startIndex = -1;

  for (let i = 0; i < kNumber.length; i++) {
    if (i === kNumber.length - 1) {
      if (isPrime(kNumber.slice(startIndex, kNumber.length))) answer++;
    }

    if (kNumber[i] === '0' && startIndex !== -1) {
      if (isPrime(kNumber.slice(startIndex, i))) answer++;
      startIndex = -1;
    }

    if (kNumber[i] !== '0' && startIndex === -1) {
      startIndex = i;
    }
  }

  return answer;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
