const solution = (str1, str2) => {
  let answer = 0;
  const dict = {};

  // func
  function isAnagram (dict) {
    for (value of Object.values(dict)){
      if (value !== 0) return false;
    }
    return true;
  }

  // main
  for (char of str2) {
    dict[char] = dict[char] + 1 || 1;
  };

  for (char of str1.slice(0, str2.length - 1)) {
    if (dict[char] === undefined) dict[char] = -1;
    dict[char] = dict[char] === undefined ? -1 : dict[char] - 1;
  }

  for (let rt = str2.length - 1; rt < str1.length; rt++) {
    const lt = rt - str2.length + 1;
    dict[str1[rt]] = dict[str1[rt]] === undefined ? -1 : dict[str1[rt]] - 1;
    if (isAnagram(dict)) answer++;
    dict[str1[lt]] = dict[str1[lt]] === undefined ? 1 : dict[str1[lt]] + 1;
  }

  return answer;
}
let a = "bacbabc";
let b = "abc";
console.log(solution(a, b));
