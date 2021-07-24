function solution(nums) {
  let answer = Number.MAX_SAFE_INTEGER;
  const A = [];
  const B = [];
  const C = [];
  const ch = Array.from({ length: nums.length }, () => false);

  function DFS(L) {
    if (L === 9) {
        const a = A.reduce((acc, cur) => acc + cur);
        const b = B.reduce((acc, cur) => acc + cur);
        const c = C.reduce((acc, cur) => acc + cur);
        
        const max = Math.max(a, b, c);
        const min = Math.min(a, b, c);
        answer = Math.min(answer, max - min);
      return;
    }

    for (let i = L; i < nums.length; i++) {
      if (ch[i]) continue;
      ch[i] = true;
      if (A.length < 3) {
        A.push(nums[i]);
        DFS(L + 1);
        A.pop();
      }

      if (B.length < 3) {
        B.push(nums[i]);
        DFS(L + 1);
        B.pop();
      }
      if (C.length < 3) {
        C.push(nums[i]);
        DFS(L + 1);
        C.pop();
      }
      ch[i] = false;
    }
  }

  DFS(0);

  return answer;
}

console.log(solution([1,1,1,1,1,1,1,1,2]));
