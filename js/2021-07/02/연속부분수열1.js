function solution(m, arr){
  let p1 = p2 = sum = answer = 0;
  while (p1 < arr.length || p2 < arr.length) {
    if (sum === m) {
      answer++;
      sum -= arr[p1++];
      sum += arr[p2++];
    } else if (sum > m || p2 >= arr.length) {
      sum -= arr[p1++];
    } else {
      sum += arr[p2++];
    }
  }
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));