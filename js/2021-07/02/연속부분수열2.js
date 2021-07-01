function solution(m, arr){
  let lt = rt = answer = sum = 0;

  while(rt < arr.length) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += (rt - lt + 1);
    rt++;
  }
  return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));