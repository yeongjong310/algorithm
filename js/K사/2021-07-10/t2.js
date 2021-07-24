function solution(n) {
  // Write your code here
  const players = new Set([n]);
  const memoFactorials = [1, 1, 2];

  for (let i = 3; i < 10; i++) {
    memoFactorials[i] = i * memoFactorials[i - 1];
  }

  const calcPower = num => {
    let power = 0;
    const numbToStr = num + '';

    for (const digit of numbToStr) {
      power += memoFactorials[digit];
    }

    return power;
  };

  let nextPower = calcPower(n);

  while (!players.has(nextPower)) {
    players.add(nextPower);
    nextPower = calcPower(nextPower);
  }

  return Math.max(...players) * players.size;
}

console.log(solution(5));
