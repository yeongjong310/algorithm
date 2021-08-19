function solution(codeOwnersMap, path) {
  let answer = codeOwnersMap;

  path.split('/').forEach(
    (directory => {
      if (directory !== '') answer = answer[directory];
    })
  );
  return answer;
}

const codeOwnersMap = {
  scripts: ['배수진'],
  services: {
    'business-ledger': ['고찬균', '배수진'],
    'toss-card': ['채주민', '유재섭'],
    payments: ['유재섭'],
  },
};

console.log(solution(codeOwnersMap, 'scripts')); // ['배수진']
console.log(solution(codeOwnersMap, 'services/business-ledger')); // ['고찬균, '배수진']

