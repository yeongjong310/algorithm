// 부족한 금액 계산하기
function solution1(price, money, count) {
  const lackMoney = Array.from({ length: count }, (_, i) => i + 1)
    .map(v => v * price)
    .reduce((acc, cur) => acc + cur, 0) - money;

  return lackMoney > 0 ? lackMoney : 0;
}

function solution2(price, money, count) {
  const lackMoney = (((1 + count) * count) * price) / 2 - money;

  return lackMoney > 0 ? lackMoney : 0;
}
