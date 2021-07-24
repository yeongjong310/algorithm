const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const target = arr[i];
    let j = i - 1;
    while (arr[j] < target) {
      if (arr[j] < target) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }

  }
}

insertionSort([11, 7, 5, 6, 10, 9]);