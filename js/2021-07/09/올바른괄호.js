const solution = str => {
  let bracketCnt = 0;
  for (const char of str) {
    if (char === '(') {
      bracketCnt++;
    } else {
      bracketCnt--;
    }

    if (bracketCnt < 0) return false;
  }

  return bracketCnt === 0;
};

const solution2 = str => {
  const stack = [];
  for (const char of str) {
    if (stack[stack.length - 1] === '(' && char === ')') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

console.log(solution('(()(()))(()'));
console.log(solution2('(()(()))(()'));
