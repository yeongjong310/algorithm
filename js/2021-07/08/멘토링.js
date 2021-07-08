const solution = scores => {
  const n = scores[0].length; // 학생 수
  const m = scores.length; //  테스트 수

  let answer = 0;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === j) continue;

      let flag = true;
      for (let k = 0; k < m; k++) {
        if (scores[k].indexOf(i) > scores[k].indexOf(j)) {
          flag = false;
          break;
        }
      }
      if (flag === true) answer++;
    }
  }

  return answer;
};

console.log(solution([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
]));
