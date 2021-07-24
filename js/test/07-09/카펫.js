function solution(brown, yellow) {
  for (let i = 0; i <= yellow ** 0.5; i++) {
    if (Number.isInteger(yellow / i)) {
      const width = yellow / i;
      const height = i;

      const canBrown = (width + 2) * 2 + height * 2;

      if (canBrown === brown) return [width + 2, height + 2];
    }
  }
}

console.log(solution(10, 2)); // 4, 3
