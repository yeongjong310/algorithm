/**
 * @param {string} s
 * @return {string}
 */
// 투포인터 start, end 가 1씩 이동하며 subStr의 위치를 point
// start부터 end까지 팰린드롬 검증
// 가장 긴 팰린드롬 문자열 변수에 저장하며 결과로 반환
// 위 코드의 문제는 start가 +1 되기 전 end를 확장시키면 펠린드롬이 완성될 수 있다는 점

// 팰린드롬의 핵심은 문자열의 중앙은 반드시 밸린드롬이라는 것.
// 중앙은 짝수 홀수 모두 해당한다. 따라서 짝수 2와 홀수 1로 subStr을 지정하고 슬라이싱
// 그 후 팰린드롬인 경우 확장하는 방식으로 풀면 O(n2)이면서 매우 최적화된 상태기 때문에 속도가 빠르다.

const longestPalindrome = function (s) {
  let result = s[0];

  for (let i = 0; i < s.length; i++) {
    const evenStr = expend(s, i, i + 2);

    const oddStr = expend(s, i, i + 3);

    const longerPalindromeStr =
      evenStr.length < oddStr.length ? oddStr : evenStr;

    if (result.length < longerPalindromeStr.length) {
      result = longerPalindromeStr;
    }
  }

  return result;

  // 전형적인 투포인터 재귀방식에 비해 40배 정도 빠르다.
  function expend(str, start, end) {
    while (start >= 0 && end <= s.length && s[start] === s[end - 1]) {
      start--;
      end++;
    }

    return str.slice(start + 1, end - 1);
  }

  // 재귀방식으로 풀이 => 함수 호출 방식이 포함되기 때문에 굉장히 느리다.
  function expend_re(str, start, end) {
    if (start < 0 || end > str.length) {
      return str.slice(start + 1, end - 1);
    }

    let result;

    if (isPalindrome(str.slice(start, end))) {
      result = expend(str, start - 1, end + 1);
    } else {
      result = str.slice(start + 1, end - 1);
    }

    return result;
  }

  function isPalindrome(str) {
    for (let j = 0; j < str.length / 2; j++) {
      if (str[j] !== str[str.length - 1 - j]) {
        return false;
      }
    }

    return true;
  }
};
