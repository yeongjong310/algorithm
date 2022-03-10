// 0. lowercase
// 1. seperator([^a-zA-Z])으로 split
// 3. 공백, 금지어 제거
// 4. obj로 개수 체크
// 5. 가장 큰 값 반환

const mostCommonWord = function (paragraph, banned) {
  const validWords = paragraph
    .toLowerCase()
    .split(/[^a-zA-Z]/)
    .filter((word) => word)
    .filter((word) => !banned.includes(word));

  const countWords = {};

  validWords.forEach((word) => {
    countWords[word] = countWords[word] + 1 || 1;
  });

  // [key, value]로 가장 큰 value를 찾아 key를 반환
  return Object.entries(countWords).reduce(
    (acc, cur) => (acc[1] > cur[1] ? acc : cur),
    0
  )[0];
};

mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);
