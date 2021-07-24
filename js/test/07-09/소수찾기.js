function solution(numbers) {
  const cases = new Set();
  const useState = Array.from({ length: numbers.length }, () => false);

  function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.ceil(num / 2); i++) {
      if ((num % i) === 0) return false;
    }

    return true;
  }

  function DFS(level, tempCase) {
    for (let i = 0; i < numbers.length; i++) {

      if (level === numbers.length) {
        cases.add(+tempCase);
        return;
      }

      if (useState[i]) continue;

      useState[i] = true;
      DFS(level + 1, tempCase + numbers[i]); // 0 '' -> 1 '0' 2 '01' 3 '011'
      useState[i] = false;
      DFS(level + 1, tempCase);
    }
  }

  DFS(0, '');

  return Array.from(cases).map(isPrime).filter(bool => bool).length;
}

console.log(solution('17'));
