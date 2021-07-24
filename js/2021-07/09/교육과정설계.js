const solution = (compulsorySubjects, planSubjects) => {
  const q1 = compulsorySubjects.split('');
  const q2 = planSubjects.split('');

  for (let i = q2.length - 1; i >= 0; i--) {
    if (q2[i] === q1[q1.length - 1]) q1.pop();
  }

  return q1.length === 0;
};

console.log(solution('CBA', 'CADBGE'));

