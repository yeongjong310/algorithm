function solution(arr) {
  // let answer = arr[0];
  // for (let i=0; i < arr.length; i++) {
  //   if (arr[i] < answer) answer = arr[i]
  // }
  const answer = Math.min(...arr);
  return answer;
}

let arr = [5, 7, 1, -3, 2, 9, 11];
console.log(solution(arr));
