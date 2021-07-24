// function solution(nums, t) {
//   let answer = 0;
//   const set = new Set();

//   const combination = startIndex => {
//     let isAnswer = true;
//     for (const ingres of nums) {
//       let isSubSequnce = true;
//       for (const ingre of ingres) {
//         if (!set.has(ingre)) {
//           isSubSequnce = false;
//           break;
//         }
//       }
//       if (isSubSequnce) {
//         isAnswer = false;
//         break;
//       }
//     }

//     if (isAnswer) answer++;
//     for (let i = startIndex; i <= t; i++) {
//       set.add(i);
//       combination(i + 1);
//       set.delete(i);
//     }
//   };

//   combination(1);

//   return answer;
// }

// console.log(solution([[2], [1, 3]], 4)); // 6;

// 비트연산은 무조건 괄호()를 씌워주어야 한다. === 비교연산자나  산술 연산자보다 우선순위가 낮음.
function solution(nums, t) {
  let answer = 0;
  let foodBit = 0;

  const bits = nums.map(ingres => ingres.reduce((acc, cur) => acc | (1 << (cur - 1)), 0)); // eslint-disable-line no-bitwise

  const combination = startIndex => {
    let isAnswer = true;

    for (const studentBit of bits) {
      if ((studentBit & foodBit) === studentBit) { // eslint-disable-line no-bitwise
        isAnswer = false;
        break;
      }
    }
    if (isAnswer) {
      answer++;
    }

    for (let i = startIndex; i <= t; i++) {
      foodBit |= 1 << (i - 1); // eslint-disable-line no-bitwise
      combination(i + 1);
      foodBit ^= 1 << (i - 1); // eslint-disable-line no-bitwise
    }
  };

  combination(1);

  return answer;
}

console.log(solution([[2], [1, 3]], 4)); // 6;
