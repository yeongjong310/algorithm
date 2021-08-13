function solution(dartResult) {
  const scores = [];
  const AREA = {
    S: 1,
    D: 2,
    T: 3
  };

  dartResult.split(/(\d+|\w)/).forEach(char => {
    if (char !== '') {
      if (!Number.isNaN(+char)) scores.push(+char);
      if (AREA[char]) scores[scores.length - 1] **= AREA[char];
      if (char === '*') {
        scores[scores.length - 1] *= 2;
        scores[scores.length - 2] && (scores[scores.length - 2] *= 2);
      }
      if (char === '#') scores[scores.length - 1] *= -1;
    }
  });

  return scores.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution('1S2D*3T') === 37);
console.log(solution('1D#2S*3S') === 5);
console.log(solution('1D2S#10S') === 9);
console.log(solution('1D2S0T') === 3);
