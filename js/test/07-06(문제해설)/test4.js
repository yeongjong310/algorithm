const isOK = s => {
  let cnt = 0;
  for (const x of s) {
    if (x === '(') cnt += 1;
    else cnt -= 1;

    if (cnt < 0) return false;
  }

  return cnt === 0;
};

// function solution (str) {
//   let queue = new Set([str]);
  
//   while (queue.size) {
//     const next = new Set();

//     for (let subStr of queue) {
//       if(isOK(subStr)) {
//         let answer = [...queue].filter(isOK);
//         return answer[0] === "" ? 0: answer.length;
//       }
//       for(let i = 0; i < subStr.length; i++) {
//         const newSubStr = subStr.slice(0, i) + subStr.slice(i+1);
//         next.add(newSubStr);
//       }
//     }

//     queue = next;
//   }
// }

function solution(s) {
  const answer = new Set();
  const queue = [];

  let foundLevel = 0;


  queue.push([s, 0]);

  while (queue.length) {
    const [subStr, level] = queue.pop();

    if (foundLevel < level) break;

    for (let i=0; i < subStr.length; i++) {
      const newSubStr = subStr.slice(0, i) + subStr.slice(i + 1);

      if (isOK(newSubStr)) {
        foundLevel = level;
        answer.add(newSubStr);
        continue;
      };

      queue.push([newSubStr, level + 1]);
    };
  }

  return answer.size;
}

console.log(solution("()(()()")) //2