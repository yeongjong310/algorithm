// 공통접두시 반환하기

function solution(strs) {
  let lcp = strs[0];

  for (const str of strs) {
    let tempLcp = "";

    for (let i = 0; i < str.length; i++) {
      if (lcp[i] === str[i]) tempLcp += str[i];
      else break;
    }

    if (tempLcp.length < lcp.length) lcp = tempLcp;
  }

  return lcp;
}

console.log(solution(['long', 'longtime', 'longest']));
