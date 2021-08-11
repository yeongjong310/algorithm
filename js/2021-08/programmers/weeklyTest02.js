function solution(scores) {
  let answer = '';

  const getGrade = average => {
    switch (true) {
      case average >= 90:
        return 'A';
      case average >= 80:
        return 'B';
      case average >= 70:
        return 'C';
      case average >= 50:
        return 'D';
      default:
        return 'F';
    }
  };

  const studentLength = scores.length;
  const receivedScoresListByStudent = Array.from({ length: studentLength }, () => []);

  for (let i = 0; i < studentLength; i++) {
    for (let j = 0; j < studentLength; j++) {
      receivedScoresListByStudent[j].push([i, scores[i][j]]);
    }
  }

  receivedScoresListByStudent.forEach((scores, myNumber) => {
    scores.sort((a, b) => b[1] - a[1]);

    const filterdScores = scores
      .filter((_, index, thisArr) => {
        if (index === 0
          && thisArr[index][0] === myNumber
          && thisArr[index][1] !== thisArr[index + 1][1]) return false;

        if (index === studentLength - 1
          && thisArr[studentLength - 1][0] === myNumber
          && thisArr[studentLength - 1][1] !== thisArr[studentLength - 2][1]) return false;

        return true;
      })
      .map(([_, score]) => score);

    const average = filterdScores.reduce((acc, cur, index) => {
      if (index === filterdScores.length - 1) return (acc + cur) / filterdScores.length;
      return acc + cur;
    }, 0);

    answer += getGrade(average);
  });

  return answer;
}

const scores = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

// console.log(solution(scores) === 'FBABD');
