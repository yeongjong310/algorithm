// 백준 탑, 주식과 갭
// leetcode daily temperatures 비슷함
// 스택은 효율성과 연관이 높다. => 주의

var dailyTemperatures = function(temperatures) {
  const stack = [0];
  const answer = Array(temperatures.length).fill(0);

  for (let i = 1; i < temperatures.length; i++) {
     while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
         const pastIndex = stack.pop();
         answer[pastIndex] = i - pastIndex;
     }

      stack.push(i);
  }
  
  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));