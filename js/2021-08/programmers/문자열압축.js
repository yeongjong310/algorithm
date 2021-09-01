function solution(s) {
  let answer = s.length;

  const maxUnit = Math.floor(s.length / 2);

  for (let unit = 1; unit <= maxUnit; unit++) {
    const stack = [];

    for (let i = 0; i < s.length; i += unit) {
      const lastElement = stack[stack.length - 1]; // [count, sequence]
      const lastSequence = lastElement && lastElement[1];

      const curSequence = s.slice(i, i + unit);

      lastSequence === curSequence ? stack[stack.length - 1][0]++ : stack.push([1, curSequence]);
    }

    answer = Math.min(
      answer,
      stack.reduce((acc, [count, sequence]) => (count !== 1 ? count + sequence : sequence) + acc, '').length
    );
  }

  return answer;
}

// abcabc
// a b c a b a
// ab ca
// bc ab
// ca ba
// abc abc

console.log(solution('abcabc')); // 4
console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8
console.log(solution('abcabcabcabcdededededede')); // 14
console.log(solution('xababcdcdababcdcd')); // 17
