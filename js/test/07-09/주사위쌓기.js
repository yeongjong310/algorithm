const solution = arr => {
  const hash = {
    0: 5,
    1: 3,
    2: 4,
    3: 1,
    4: 2,
    5: 0,
  };

  for (let i = 0; i < 6; i++) { // 밑면 선택
    let btSide = arr[0][i];
    let upSide = arr[0][hash[i]];
    console.log(btSide, upSide);
    btSide = upSide;
  }
}

console.log(
  solution([
    [2, 3, 1, 6, 5, 4],
    [3, 1, 2, 4, 6, 5],
    [5, 6, 4, 1, 3, 2],
    [1, 3, 6, 2, 4, 5],
    [4, 1, 6, 5, 2, 3]
  ])
);
