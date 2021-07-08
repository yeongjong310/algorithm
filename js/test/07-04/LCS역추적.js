function solution(s1, s2){
  let answer="";
  len1=s1.length;
  len2=s2.length;
  let dy=Array.from(Array(1001), ()=>Array(1001).fill(0));

  for(let i=1; i<=len1; i++){
      for(let j=1; j<=len2; j++){
          if(s1[i-1]===s2[j-1]){
              dy[i][j]=dy[i-1][j-1]+1;
          }
          else{
              dy[i][j]=Math.max(dy[i-1][j], dy[i][j-1]);
          }
      }
  }

  function print(x, y) {
    if (dy[x][y] === 0) return;

    if (s1[x-1] === s2[y-1]) {
      print(x-1, y-1);
      answer += s1[x-1];
    }

    else if (dy[x-1][y] > dy[x][y-1]) {
      print(x-1, y);
    }

    else {
      print(x, y-1);
    }
  }

  print(s1.length, s2.length);

  return answer;
}
console.log(solution("acbehf", "abefc"));