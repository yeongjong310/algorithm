// const factorial = n => {
//   let answer = 1;

//   for (let i = 1; i <= n; i++) {
//     answer *= i;
//   }

//   return answer;
// }

const factorial = n => {

  const recursive = v => {
    if (v === n) return v;

    return v * recursive(v + 1);
  };

  return recursive(1);
}


console.log(factorial(5));