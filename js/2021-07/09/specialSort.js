const solution = arr => {
  let isSorted = true;

  const swap = (a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    if (isSorted) isSorted = false;
  };

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) swap(j, j + 1);
    }
    if (isSorted) break;
  }
  return arr;
};

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6])); // -3 -2 -6 1 2 3 5 6
