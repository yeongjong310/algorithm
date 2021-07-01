// function solution(arr1, arr2) {
//   const set = new Set(arr2);
//   const intersectionArr= arr1.filter(num => set.has(num));
//   return intersectionArr.sort();
// }

function solution(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  
  let p1 = p2 = 0;
  const answer = [];
  while (p1 < arr1.length || p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    }
    else if (arr1[p1] < arr2[p2] || p2 >= arr2.length) p1++;
    else if (arr1[p1] > arr2[p2] || p1 >= arr1.length) p2++;
  }
  return answer;

}

let a = [1, 3, 9, 5, 2]; // [1,2,3,5,9]
let b = [3, 2, 5, 7, 8]; // [2,3,5,7,8]
console.log(solution(a, b));
