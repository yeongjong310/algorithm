// 최소 값 갱신
// 최소 값과 비교하여 이후 index에서 큰 값이 있다면 차익을 계산하여 result를 지속적으로 갱신한다.

const maxProfit = function (prices) {
  let min = prices[0];
  let result = 0;

  prices.forEach((price, index) => {
    min = Math.min(min, price);

    if (min < price) {
      result = Math.max(result, price - min);
    }
  });

  return result;
};
