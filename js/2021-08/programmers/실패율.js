function solution(N, stages) {
  const answer = [];
  let challengedPeople = stages.length;
  const numPeopleInStage = new Array(N + 2).fill(0);

  stages.forEach(stage => {
    numPeopleInStage[stage] += 1;
  });

  for (let i = 1; i < numPeopleInStage.length - 1; i++) {
    answer.push([i, numPeopleInStage[i] / challengedPeople]);
    challengedPeople -= numPeopleInStage[i];
  }
  return answer.sort((a, b) => b[1] - a[1]).map(([stage]) => stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
