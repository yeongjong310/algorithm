// 유효한 팰린드롬 leetcode 125
// 풀이 1. o(n) 양 끝이 동일한지 검사
const isPalindrome = function (s) {
  const isAlNum = new RegExp(/[^A-Za-z0-9]/);

  const onlyLowerAlNumStr = Array.from(s.toLowerCase()).filter((char) =>
    isAlNum.test(char)
  );

  const palindromeValidator = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }

    return true;
  };

  return palindromeValidator(onlyLowerAlNumStr);
};
