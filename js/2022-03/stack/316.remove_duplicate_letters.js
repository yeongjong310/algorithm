// 1. 단어를 삽입
// 2. 현재 문자가 삽입된 문자보다 사전 순서상 앞쪽에 위치하는지 확인
// 3. 2 OK라면, 삽입된 문자가 뒤쪽에서 삽입될 수 있는지 확인
// 4. 3 OK라면 삽입된 문자 pop
// 5. 만약 이미 스택에 있는 문자가 현재 문자라면 스킵(중복된 값을 제거해야하며 이미 앞에서부터 사전상 정렬을 유지하고있기 때문)

const removeDuplicateLetters = function (s) {
  const stack = [];
  const seen = new Set();
  const charCounter = {};

  s.split("").forEach((char) => {
    charCounter[char] = charCounter[char] + 1 || 1;
  });

  for (let i = 0; i < s.length; i++) {
    charCounter[s[i]] = charCounter[s[i]] - 1;

    if (seen.has(s[i])) {
      continue;
    }

    while (
      s[i] < stack[stack.length - 1] &&
      charCounter[stack[stack.length - 1]]
    ) {
      seen.delete(stack.pop());
    }

    stack.push(s[i]);
    seen.add(s[i]);
  }

  return stack.join("");
};
