function solution(arr){
  const sumsElementsByDiagnals = Array.from({length: arr.length}, () => 0);
  const sumsElementsByRows = Array.from({length: arr.length}, () => 0);
  const sumsElementsByColumns = Array.from({length: 2}, () => 0);

  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr.length; j++) {
      sumsElementsByDiagnals[i] += arr[i][j];
      sumsElementsByRows[j] += arr[i][j];
      if ((i===0 && j===0) || i / j === 1) {
        sumsElementsByColumns[0] += arr[i][j];
      }
      if (i + j === (arr.length - 1)) {
        sumsElementsByColumns[1] += arr[i][j];
      }
    }
  }

  return Math.max(
    ...sumsElementsByDiagnals,
    ...sumsElementsByRows,
    ...sumsElementsByColumns
  );
}

let arr=[[10, 13, 10, 12, 15],
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
       
console.log(solution(arr));