// 0. 현재 index를 stack에 삽입한다.
// 1. 이전 온도에 비해 높아지는 변곡점을 찾는다.
// 2. stack을 하나씩 꺼내며 온도가 높아졌다면 result에 index를 비교하여 기다린 날을 삽입한다.
// 3. stack의 top보다 높지 않으면 계속해서 현재 index를 삽입한다.

const dailyTemperatures = function (temperatures) {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  temperatures.forEach((temperature, index) => {
    while (temperatures[stack[stack.length - 1]] < temperature) {
      const prevIndex = stack.pop();
      result[prevIndex] = index - prevIndex;
    }

    stack.push(index);
  });

  return result;
};
