const duplicatedPermutation = (n, m) => {
  const arr = [];
  const recursive = () => {
    if (arr.length === m) {
      console.log(arr.join(' ') + ' ');
      return;
    }

    for (let i = 1; i <= n; i ++) {
      arr.push(i);
      recursive();
      arr.pop();
    }
  }

  recursive();
};

duplicatedPermutation(3, 2);