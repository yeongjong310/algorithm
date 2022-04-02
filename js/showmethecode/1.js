// 물약의 가격은 1000원 보다 작다.
// 물약의 종류는 10개 이하
// 각 물약을 샀을 때 할인 정보는 10개 이하
// 자기 자신을 할인시키지는 않는다.
// 힐인 가격역시 1000원 이하

// DP는 힘들어 보이며 DFS로 풀이

var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');;
const input = `4
10 15 20 25
2
3 10
2 20
0
1
4 10
1
1 10
`
  .trim()
  .split("\n");

const [potionLengthStr, potionStr, ...sales] = input;

const salesByPotion = {};

const potions = potionStr.split(" ").map(Number);

const potionLength = +potionLengthStr;

let id = 0;

sales.forEach((sale, index) => {
  if (sale.length === 1) {
    salesByPotion[++id] = sales.slice(index + 1, index + 1 + +sale);
  }
});

// 1. 물약 수열
// 2. 백트레킹으로 더 많이 소비하는경우 지우기

const selected = Array(+potionLength).fill(false);
let minPrice = Number.POSITIVE_INFINITY;

permutation(potions, 0, 0);

function permutation(potions, num, sum) {
  if (sum >= minPrice) return;
  if (num === potionLength) {
    minPrice = Math.min(minPrice, sum);
    return;
  }

  for (let i = 0; i < potionLength; i++) {
    if (selected[i]) continue;

    // 구매
    selected[i] = true;

    // 구매 후 할인 가격 갱신
    const salesPosion = [...potions];
    salesByPotion[i + 1]?.forEach((sale) => {
      const [id, amount] = sale.split(" ");
      salesPosion[+id - 1] =
        salesPosion[+id - 1] - +amount > 0 ? salesPosion[+id - 1] - +amount : 1;
    });

    permutation(salesPosion, num + 1, sum + potions[i]);
    selected[i] = false;
  }
}

console.log(minPrice);
