const selectionSort = arr => {
  function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    swap(i, min);
  }

  return arr;
};

console.log(selectionSort([13, 5, 11, 7, 23, 15]));
