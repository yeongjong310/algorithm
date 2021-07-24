const solution = (m, arr) => {
  const answer = [];
  const usedState = Array.from({ length: m }, () => false);

  const recursive = () => {
    if (answer.length === m) {
      console.log(answer);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (usedState[i]) continue;

      answer.push(arr[i]);
      usedState[i] = true;
      recursive();
      answer.pop();
      usedState[i] = false;
    }
  };

  recursive();
};
solution(2, [3, 6, 9]);