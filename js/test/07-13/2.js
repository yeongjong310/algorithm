function solution(A, B, C) {
  const numCounter = new Map();

  for (const num of [...A, ...B, ...C]) {
    numCounter.set(num, numCounter.get(num) + 1 || 1);
  }
  console.log(numCounter);
  const commonNumbers = [...numCounter.entries()]
    .filter(([_, value]) => value === 3)
    .map(([key]) => key);

  if (commonNumbers.length === 0) return -1;

  return Math.max(...commonNumbers);
}

console.log(
  solution(
    [39, 31, 32, 75, 73, 7, 89, 21, 7, 67], [4, 19, 52, 75, 35, 100, 4, 26, 24, 69], [82, 53, 22, 64, 58, 80, 94, 75, 51, 69]
  )
);
