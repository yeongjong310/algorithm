// function solution (length) {
//   const arr = Array.from({length}, () => Array(length).fill(0));
//   let x = 0;
//   let y = -1;
//   let s = 1;
//   let count = 1;
//   let n = 5;
//   while(n > 0) {
//     for (let i = 0; i < n; i++) {
//       y += s;
//       arr[x][y] = count++;
//     }
//     n--;
//     for (let i = 0; i < n; i++) {
//       x += s;
//       arr[x][y] = count++;
//     }
//     s *= -1;
//   }
//   console.log(arr);
// }

// solution(5);

function solution (length) {
  const arr = Array.from({length}, () => Array(length).fill(0));;
  let n = 5;
  let x = y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      arr[]
    }
    n--;
  }
}