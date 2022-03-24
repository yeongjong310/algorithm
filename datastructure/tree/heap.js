class MinHeap {
  #arr;

  constructor(arr = []) {
    this.#arr = arr;
  }

  get arr() {
    return this.#arr;
  }

  #swap(targetIndex, otherIndex) {
    [this.#arr[targetIndex], this.#arr[otherIndex]] = [
      this.#arr[otherIndex],
      this.#arr[targetIndex],
    ];
  }

  push(value) {
    const needSwap = (targetIndex, parentIndex) =>
      this.#arr[targetIndex] < this.#arr[parentIndex];

    this.arr.push(value);

    let currentIndex = this.arr.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (needSwap(currentIndex, parentIndex)) {
        this.#swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    const needSwap = (targetIndex, childIndex) =>
      this.#arr[targetIndex] > this.#arr[childIndex];

    const result = this.arr[0];

    this.arr[0] = this.#arr.pop();

    let currentIndex = 0;

    while (currentIndex < this.#arr.length) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;

      if (!this.#arr[leftIndex]) break;

      let childIndex =
        this.#arr[leftIndex] > this.#arr[rightIndex] ? rightIndex : leftIndex;

      if (needSwap(currentIndex, childIndex)) {
        this.#swap(currentIndex, childIndex);
        currentIndex = childIndex;
      } else {
        break;
      }
    }

    return result;
  }
}
