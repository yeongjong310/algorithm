// [6, 2, 2, 6] => [4, 4, 4, 4]  ===  2
// [4, 1, 2, 3] => [2, 1, 1, 6]  ===  3

// 1. pointer가 0 부터 widths.length 까지 움직인다.
// 2. pointer와 pointer + 1을 비교하며 pointer에 해당하는 값을 맞춘다.

// pointer === 0  => 4, 4, 2, 6
// pointer === 1 => 4, 4, 2, 6
// pointer === 2 => 4, 4, 4, 4

// pointer 0 => 2, 3, 2, 3
// pointer 1 => 2, 1 ,4, 3
// pointer 2 => 2, 1, 1, 6

function solution(widths, goal) {
  let answer = 0;
  let pointer = 0;

  while (pointer <= widths.length - 2) {
    if (widths[pointer] !== goal[pointer]) {
      const gap = goal[pointer] - widths[pointer];
      widths[pointer] += gap;
      widths[pointer + 1] -= gap;
      answer++;
    }

    pointer++;
  }

  return answer;
}

console.log(solution([6, 2, 2, 6], [4, 4, 4, 4])); // 2
console.log(solution([4, 1, 2, 3], [2, 1, 1, 6])); // 3
