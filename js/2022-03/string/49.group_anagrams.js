// 풀이 방법
// 1. strs[i]를 alphabetical 순으로 정렬 (nlog(n))
// 2. obj 자료구조를 활용하여 정렬된 strs[i]를 키로 에너그램 배열에 삽입
// 3. obj.values() 반환

let groupAnagrams = function (strs) {
  const anagrams = new Map();

  strs
    .map((str) => [str, str.split("").sort().join("")])
    .forEach(([orgStr, sortedStr]) => {
      anagrams.has(sortedStr)
        ? anagrams.get(sortedStr).push(orgStr)
        : anagrams.set(sortedStr, [orgStr]);
    });

  return Array.from(anagrams.values());
};
