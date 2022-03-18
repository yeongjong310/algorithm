// 내풀이 닫기 괄호가 나온경우 그에 해당하는 열림 괄호가 stack 최상위에 존재하는 지 확인하여 pop한다.
// 마지막에 stack.length === 0 이라면 통과

const isValid1 = function (s) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]] && pairs[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

// 원리는 똑같지만, 더 효육적이다.
// 닫기 괄호가 나왔을 때, stack 최상위에 매칭되는 열림 괄호가 없다면 그 괄호는 not valid하여 바로 return  false를 반환한다.

const isValid2 = function (s) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in pairs)) {
      stack.push(s[i]);
    } else if (stack.pop() !== pairs[s[i]]) {
      return false;
    }
  }

  return stack.length === 0;
};
