function solution(n, f) {
  let answer;
  const arr = [];
  const useState = Array.from(n + 1).fill(false);
  let isFound = false;

  function isAnswer(arr) {
    let i = 1;

    while (arr.length !== 1) {
      arr[i - 1] = arr[i] + arr[i - 1];
      if (i === arr.length) {
        arr.pop();
        i = 1;
      } else {
        i++;
      }
    }
    return arr[0] === f;
  }

  function permutation() {
    if (isFound) return;
    if (arr.length === n) {
      if (isAnswer([...arr])) {
        isFound = true;
        answer = [...arr];
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (useState[i]) continue;

      arr.push(i);
      useState[i] = true;
      permutation();
      arr.pop();
      useState[i] = false;
    }
  }

  permutation();

  return answer;
}

console.log(solution(4, 16));
