const solution = (m, arr) => {
  const answer = [];
  const useState = Array.from({length:m}, () => false);

  const recursive = () => {
    if (answer.length === m) {
      console.log(answer);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (useState[i]) continue;

      answer.push(arr[i]);
      useState[i] = true;
      recursive();
      answer.pop();
      useState[i] = false;
    }

  }
  recursive();
}
solution(2, [3, 6, 9]);