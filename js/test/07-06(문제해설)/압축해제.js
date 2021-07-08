function solution (s) {
  let temp = '';
  const stack = [];
  let poppedChar;
  let num = '';

  for (let char of s) {
    if (char !== ')') {
      stack.push(char);
      continue;
    }

    console.log(stack);
    while (poppedChar !== "(") {
      poppedChar = stack.pop()
      temp = poppedChar + temp;
    }

    while (stack.length !== 0 && !isNaN(stack[stack.length - 1])) {
      num = stack.pop() + num;
    }
    stack.push(temp.repeat(+num));
  }
  console.log("123", temp);
  // console.log(stack);
}

solution('3(a2(b))ef');