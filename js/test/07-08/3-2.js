function solution(num) {
  let answer = [];
  const arr = [1];

  for (let i = 2; i <= (num + 1) / 2; i++) {
    arr.push(i);
    const sum = num - arr.reduce((acc, cur) => acc + cur, 0);
    if ((sum % arr.length) === 0) {
      answer.push([...arr]);
    }
  }

  return answer;
}

console.log(solution(15));
