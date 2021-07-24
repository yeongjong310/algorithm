const bubbleSort = arr => {
  let isSorted = true;

  const swap = (a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    if (isSorted) isSorted = false;
  };

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1);
    }
    if (isSorted) break;
  }

  return arr;
};

console.log(bubbleSort([13, 5, 11, 7, 23, 15]));
console.log(bubbleSort([5, 7, 11, 13, 15, 23]));
