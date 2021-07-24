class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(value) {
    this.head = new Node(value);
    this.size = 1;
  }

  dequeue() {
    if (this.size > 0) {
      const { head } = this;
      this.head = this.head ? this.head.next : null;

      this.size -= 1;
      return head.value;
    }
  }

  inqueue(value) {
    let curNode = this.head;

    while (curNode.next) {
      curNode = curNode.next;
    }

    curNode.next = new Node(value);

    this.size++;
  }

  print() {
    let answer = '';
    let curNode = this.head;
    while (curNode) {
      answer += curNode.value + ' ';
      curNode = curNode.next;
    }

    return answer;
  }
}

const solution = (num, k) => {
  const queue = new Queue(1);
  let cnt = 0;

  for (let i = 2; i < num + 1; i++) {
    queue.inqueue(i);
  }

  while (queue.size !== 1) {
    const prince = queue.dequeue();
    cnt = (cnt + 1) % k;

    if (cnt) queue.inqueue(prince);
  }

  return queue.head.value;
};

console.log(solution(8, 3));
