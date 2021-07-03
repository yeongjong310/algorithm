const solution = n => {
  let arr = [];
  function DFS (num) {
    if (num > n) {
      console.log(arr.join(''));
      return;
    }

    arr.push(num); // 넣기.
    DFS(num + 1);  // 다음 뎁스로 이동.
    arr.pop(num);  // 마지막까지 찍었으면 뺴기.
    DFS(num + 1);  // 뺀상태로 다음 DFS 진행.

  }
  DFS(1);
};
solution(3);

// 1
// 12
// 123 콘솔
// 12(3) 콘솔
// 1(2)3 콘솔
// 1(2)(3)콘솔
// (1)2
// (1)23 콘솔
// (1)2(3)콘솔
// (1)(2)(3)
// 3 콘솔