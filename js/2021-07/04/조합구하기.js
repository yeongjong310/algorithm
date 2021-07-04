const combination = (n, r) => {
  const arr = [];
  const useState = Array(n + 1).fill(false);

  const recursive = num => {
    if (arr.length === r) {
      console.log(arr);
      return;
    }

    for (let i = num; i <= n; i++) {
      if (useState[i]) continue;

      useState[i] = true;
      arr.push(i);

      recursive(i);

      useState[i] = false;
      arr.pop();
    }
  }

  recursive(1);
}

combination(3, 2);