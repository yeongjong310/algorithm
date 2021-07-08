function solution(money, cost) {
  let bp = 0;
  let tp = 0;
  let sum = 0;
  let answer = 0;
  const arr = [];

  while (tp <= cost.length) {

    if (sum < money) {
      console.log(sum, tp, bp)
      arr.push(cost[tp]);
      answer = Math.max(answer, tp - bp);
      sum += cost[tp++];
    }

    while (sum >= money) {
      console.log(arr, sum, tp, bp);
      sum -= cost[bp++];
      arr.shift();
    }

  }

  return answer;
}

console.log(solution(420, [245, 317, 151, 192]));
console.log(solution(420, [400, 20, 390, 10, 390, 10, 10]));
