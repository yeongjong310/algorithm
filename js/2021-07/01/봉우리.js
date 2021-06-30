function solution(arr){
  let answer = 0;

  const dx = [0, 1, -1, 0];
  const dy = [-1, 0, 0, -1];

  function isPeak(x, y){
    let _answer = true;

    for (let i=0; i < 4; i++) {
      const SIDE_X = i + dx[i];
      const SIDE_Y = i + dy[i];
      const PEAK = arr[x][y];
      let sideHeight = 0;

      if (SIDE_X >= 0 && SIDE_Y >= 0 && SIDE_X < arr.length && SIDE_Y < arr.length)
        sideHeight = arr[SIDE_X][SIDE_Y];

      if (PEAK <= sideHeight) {
        _answer = false
        break;
      }
    };

    return _answer
  }
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length; j++) {
      if (isPeak(i, j)) answer++;
    }
  }

  return answer;
}

let arr=[[5, 3, 7, 2, 3],
       [3, 7, 1, 6, 1],
       [7, 2, 5, 3, 4],
       [4, 3, 6, 4, 1],
       [8, 7, 3, 5, 2]];
console.log(solution(arr));