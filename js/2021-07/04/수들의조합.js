function solution (n, k, arr, m){
  let answer = 0;
  const flags = Array(k).fill(0);
  const cases = [];

  const combination = j => {
    if (cases.length === k) {
      if ((cases.reduce((acc, cur) => acc + cur, 0) % m) === 0) answer ++;
      return;
    }

    for (let i = j; i < n; i++) {
      if (flags[i]) continue;

      flags[i] = true;
      cases.push(arr[i]);

      combination(i+1); // 다음으로 선택할 값은 현재 선택 인덱스보다 아래에 있어야 함

      flags[i] = false;
      cases.pop();
    }
  }

  combination(0);

  return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));