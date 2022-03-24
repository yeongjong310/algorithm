class MinHeap {
  #arr;

  constructor(arr = []) {
    this.#arr = arr;
  }

  get arr() {
    return this.#arr;
  }

  getLeftIndex(currentIndex) {
    return currentIndex * 2 + 1;
  }

  getRightIndex(currentIndex) {
    return currentIndex * 2 + 2;
  }

  getParentIndex(currentIndex) {
    return Math.floor((currentIndex - 1) / 2);
  }

  swap(targetIndex, otherIndex) {
    [this.#arr[targetIndex], this.#arr[otherIndex]] = [
      this.#arr[otherIndex],
      this.#arr[targetIndex],
    ];
  }

  heapifyUp = () => {
    const needSwap = (targetIndex, parentIndex) =>
      this.#arr[targetIndex].priority < this.#arr[parentIndex].priority;

    let currentIndex = this.arr.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (needSwap(currentIndex, parentIndex)) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  };

  heapifyDown() {
    const needSwap = (targetIndex, childIndex) =>
      this.#arr[targetIndex].priority > this.#arr[childIndex].priority;

    let currentIndex = 0;

    while (currentIndex < this.#arr.length) {
      const leftIndex = this.getLeftIndex(currentIndex);
      const rightIndex = this.getRightIndex(currentIndex);

      if (!this.#arr[leftIndex]) break;

      let childIndex =
        this.#arr[leftIndex] > this.#arr[rightIndex] ? rightIndex : leftIndex;

      if (needSwap(currentIndex, childIndex)) {
        this.swap(currentIndex, childIndex);
        currentIndex = childIndex;
      } else {
        break;
      }
    }
  }

  push(priority, value) {
    this.arr.push({ priority, value });
    this.heapifyUp();
  }

  pop() {
    const result = this.arr[0]?.value || null;

    this.arr[0] = this.#arr.pop();

    this.heapifyDown();

    return result;
  }

  isEmpty() {
    return this.#arr.length === 0;
  }

  peek() {
    return this.#arr.length === 0 ? null : this.#arr[this.#arr.length - 1];
  }
}

// const minHeap = new MinHeap([]);

// minHeap.push(3, 1);
// minHeap.push(2, 2);
// minHeap.push(2, 1);

// console.log(minHeap.pop());
// console.log(minHeap.arr);
