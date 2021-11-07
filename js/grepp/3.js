function solution(word, cards) {
  let answer = 0;

  const isUsedRow = Array(cards.length).fill(false);
  const isUsedColumn = Array(cards.length).fill(false);

  const requiredCard = {};

  for (let i = 0; i < word.length; i++) {
    requiredCard[word[i]] = requiredCard[word[i]] + 1 || 1;
  }

  const dfs = row => {
    if (Object.values(requiredCard).filter(v => v !== 0).length === 0) answer++;
    for (let i = row; i < cards.length; i++) { // i는 row 번호
      if (isUsedRow[i]) continue;

      for (let j = 0; j < cards.length; j++) { // j는 column 번호
        if (isUsedColumn[j]) continue;

        if (requiredCard[cards[i][j]] > 0) {
          requiredCard[cards[i][j]]--;
          isUsedRow[i] = true;
          isUsedColumn[j] = true;

          dfs(i + 1);
          requiredCard[cards[i][j]]++;
          isUsedRow[i] = false;
          isUsedColumn[j] = false;
        }
      }
    }
  };

  dfs(0);

  return answer;
}

console.log(solution('APPLE', ['LLZKE', 'LCXEA', 'CVPPS', 'EAVSR', 'FXPFP']));
console.log(solution('BAB', ['ZZBZ', 'BAZB', 'XBXB', 'XBAX']));
console.log(solution('BABXZ', ['ZZBZ', 'BAZB', 'XBXB', 'XBAX']));
