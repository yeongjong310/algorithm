function solution(str) {
  const dict = {};
  for (char of str) {
    dict[char] = dict[char] + 1 || 1;
  }
  console.log(dict);
  return Object.entries(dict).reduce((acc, cur) => acc[1] > cur[1] ? acc : cur, 0)[0];
}

let str = "BACBACCACCBDEDE"; // C
console.log(solution(str));
