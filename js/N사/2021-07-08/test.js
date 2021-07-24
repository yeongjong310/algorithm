function solution(s) {
  const arr = s.split('');
  var answer = -1;

  if (arr.length % 2 === 1) return 0;

  outerLoop: while(arr.length) {
      let pre = 0;
      
      for (let i = 1; i < s.length; i++) {
          console.log(arr, pre, i);
          if (arr[pre] === arr[i]) {
              arr.splice(pre, 2);
              continue outerLoop;
          }
          pre = i;
      }
      
      return 0;
  }
  
  return 1;
}

console.log(solution('baaba'));

