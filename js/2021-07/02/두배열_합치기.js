function solution (arr1, arr2) {
  let i = j = 0;
  const answer = [];
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j >= arr2.length) {
      answer.push(arr1[i++]);
    } else if (arr1[i] >= arr2[j] || i >= arr1.length) {
      answer.push(arr2[j++]);
    }
  }
  return answer;
}

let a = [1,2,3,5,9];
let b = [2,3,5,7,8];
console.log(solution(a, b));