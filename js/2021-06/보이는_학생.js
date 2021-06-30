function solution(arr){
  let answer=1, max=arr[0];
  for (let num of arr) {
    if (num > max) {
      answer++;
      max = num
    } 
  }
  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));