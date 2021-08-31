function solution(scores) {
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

  const receivedScoresListByStudent = scores.map((_, i) => scores.map(score => score[i]));
  console.log(receivedScoresListByStudent);
  return receivedScoresListByStudent
    .map((scores, i) => {
      const myScore = scores.splice(i, 1)[0];

      if (myScore > Math.max(...scores) || myScore < Math.min(...scores)) return scores;

      return [myScore, ...scores];
    })
    .map(scores => getGrade(scores.reduce((acc, cur) => acc + cur, 0) / scores.length))
    .join('');
}

const scores = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

console.log(solution(scores)); // 'FBABD'
