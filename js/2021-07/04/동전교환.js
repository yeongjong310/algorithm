const solution = (targetCoinValue, coins) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let accCoinValue = 0;

  const recursive = count => {
    if (accCoinValue > targetCoinValue) return;

    if (accCoinValue === targetCoinValue) {
      answer = Math.min(answer, count);
      return;
    }

    for (const coinValue of coins) {
      accCoinValue += coinValue;
      recursive(count + 1);
      accCoinValue -= coinValue;
    }
  };

  recursive(0, 0);

  return answer;
};

const arr = [1, 2, 5];
console.log(solution(15, arr));

// const solution = (targetCoinValue, coins) => {
//   let answer = Number.MAX_SAFE_INTEGER;

//   const recursive = (count, accCoinValue) => {
//     if (accCoinValue > targetCoinValue) return;

//     if (accCoinValue === targetCoinValue) {
//       answer = Math.min(answer, count);
//       return;
//     }

//     for(let coinValue of coins) {
//       recursive(count + 1, accCoinValue + coinValue);
//     }
//   }

//   recursive(0, 0);

//   return answer;
// };

// let arr=[1, 2, 5];
// console.log(solution(15, arr));