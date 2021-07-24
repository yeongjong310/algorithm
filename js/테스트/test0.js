function solution(k, rates) {
  let money = k;
  let flag = false;
  let 
  for (let i = 0; i < rates.length; i++) {
      if (rates[i] <= money && flag === false) {
          money -= rates[i];
          flag = true;
      } else {
          
      }
  console.log(money);
  }
}

console.log(solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])); // 2500;
