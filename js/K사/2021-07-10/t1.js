function solution(s) {
  // Write your code here
  const wordCount = {};

  for (const char of s) {
    wordCount[char] = wordCount[char] + 1 || 1;
  }

  const wordCountEnt = Object.entries(wordCount);

  for (const [key, value] of wordCountEnt) {
    if (value === 1) {
      return s.indexOf(key) + 1;
    }
  }

  return -1;
}

console.log(solution('hackthegame'));
