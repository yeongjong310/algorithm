function solution(operations) {
  const answer = [];

  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");
    if (command === "I") {
      insert(+value);
    } else if (command === "D") {
      value === "1" ? delMax() : delMin();
    }
  });

  function insert(value) {
    answer.push(value);
    answer.sort((a, b) => b - a);
  }

  function delMax() {
    answer.shift();
  }

  function delMin() {
    answer.pop();
  }

  return answer.length === 0 ? [0, 0] : [answer[0], answer[answer.length - 1]];
}
