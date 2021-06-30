function solution(arr){
  let answer = [];
  arr.forEach(score1 => {
    let rank = 1
    arr.forEach(score2 => {
      if(score1 < score2) rank++;
    });
    answer.push(rank);
  });
  return answer
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));