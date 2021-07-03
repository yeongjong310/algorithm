const solution = arr => {
  let answer = false;
  let flag = 0;
  let total = arr.reduce((acc, cur) => acc + cur, 0) / 2;

  function DFS(i, sum) {
    if (flag) return;

    if (i === arr.length) {
      if (sum === total) {
        answer = true;
        flag = true;
      }
      return
    }

    DFS(i + 1, sum + arr[i]);
    DFS(i + 1, sum)
  };

  DFS(0, 0);

  // DFS(0);
  //
  // function DFS(i) {
  //   console.log(arr1, arr2);
  //   if (i === arr.length) {
  //     if (arr1.reduce((acc, cur) => acc + cur, 0) === arr2.reduce((acc, cur) => acc + cur, 0)) {
  //       answer = true;
  //     }
  //     return;
  //   }

  //   arr1.push(arr[i]);
  //   DFS(i+1);
  //   arr1.pop();
  //   arr2.push(arr[i]);
  //   DFS(i+1);
  //   arr2.pop();
  // }

  return answer;
}

// function solution(arr){
//   let answer="NO", flag=0;
//   let total=arr.reduce((a, b)=>a+b, 0);
//   let n=arr.length;
//   function DFS(L, sum){
//       if(flag) return;
//       if(L===n){
//           if((total-sum)===sum){
//               answer="YES";
//               flag=1;
//           }
//       }
//       else{
//           DFS(L+1, sum+arr[L]);
//           DFS(L+1, sum);
//       }
//   }
//   DFS(0, 0);
//   return answer;
// }

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));

