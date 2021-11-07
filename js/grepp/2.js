function solution(grades) {
  const getScore = grade => {
    const scores = {
      'F': 0,
      'D-': 1,
      'D0': 2,
      'D+': 3,
      'C-': 4,
      'C0': 5,
      'C+': 6,
      'B-': 7,
      'B0': 8,
      'B+': 9,
      'A-': 10,
      'A0': 11,
      'A+': 12,
    };

    return scores[grade];
  }

  const topGrade = {};
  const isPushed = {};

  grades.forEach(info => {
    const [id, grade] = info.split(' ');

    if (!isPushed[grade]) isPushed[id] = false;

    if (!topGrade[id]) topGrade[id] = grade;
    else if (getScore(topGrade[id]) < getScore(grade)) {
      topGrade[id] = grade;
    }
  });

  return grades
    .filter(info => {
      const [id, grade] = info.split(' ');

      if (isPushed[id]) return false;

      if (getScore(topGrade[id]) === getScore(grade)) {
        isPushed[id] = true;
        return true;
      }
    })
    .sort((infoA, infoB) => {
      const aGrade = infoA.split(' ')[1];
      const bGrade = infoB.split(' ')[1];

      return getScore(bGrade) - getScore(aGrade);
    });
}

const grades = ["DS7651 A0", "CA0055 D+", "AI5543 C0", "OS1808 B-", "DS7651 B+", "AI0001 F", "DB0001 B-", "AI5543 D+", "DS7651 A+", "OS1808 B-"];

console.log(solution(grades)); // ["DS7651 A+", "OS1808 B-", "DB0001 B-", "AI5543 C0", "CA0055 D+", "AI0001 F"]
