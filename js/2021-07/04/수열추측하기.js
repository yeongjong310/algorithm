const solution = (n, targetNum) => {
  const useState = Array(n + 1).fill(false);
  const arr = [];
  let flag = false;
  
  const permutation = () => {
    if (arr.length === n) {
      
      return;
    }

    for (let num = 1; num < n + 1; num++) {
      if (useState[num]) continue;

      arr.push(num);
      useState[num] = true;
      permutation();
      arr.pop();
      useState[num] = false;

    }
  };

  permutation();
}

solution(4, 16);