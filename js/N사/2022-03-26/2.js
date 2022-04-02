// sentences를 순회한다.
// sentence 한 문자를 순회하며 필요한 키를 누적한다.
// 필요한 키는 대문자를 발견하면 shift, 문자이며 소문자를 발견하면 문자이다.
// 점수를 누적한다. 대문자를 발견하면 + 2 소문자를 발견하면 + 1
// 필요한 키의 집합과 점수를 쌍으로 이중 배열화 한다. Ex) [[(l, i, shift), 20]]
// dfs로 n보다 작을 때 까지 필요한 키를 누적하여 최대 점수를 갱신한다(조합).

function solution(sentences, n) {
  const keysAndScoreBySentences = Array.from(sentences, () => ({ keys: new Set(), score: 0 }));

  sentences.forEach((sentence, index) => {
      sentence.split('').forEach(char => {
          if (char === ' ') {
              keysAndScoreBySentences[index].score += 1;
          }
          else if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
              keysAndScoreBySentences[index].keys.add('shift');
              keysAndScoreBySentences[index].keys.add(char.toLowerCase());
              keysAndScoreBySentences[index].score += 2;
          } else {
              keysAndScoreBySentences[index].keys.add(char);
              keysAndScoreBySentences[index].score += 1;
          }
      })
  })

  let maxScore = 0;
  let currentScore = 0;
  let selectedKeys = new Set();

  combination(0);

  return maxScore;

  function combination(startIndex) {
      for (let i = startIndex; i < keysAndScoreBySentences.length; i++) {
          const newKeys = new Set();

          keysAndScoreBySentences[i].keys.forEach(key => {
              if (!selectedKeys.has(key)) {
                  selectedKeys.add(key);
                  newKeys.add(key);
              }
          });

          if (i === keysAndScoreBySentences.length - 1 || selectedKeys.size > n) {
              maxScore = Math.max(
                  maxScore, 
                  i === keysAndScoreBySentences.length - 1 && selectedKeys.size <= n 
                      ? currentScore + keysAndScoreBySentences[i].score 
                      : currentScore
                      
              )
              newKeys.forEach(key => selectedKeys.delete(key));
              return;
          } else { 
              currentScore += keysAndScoreBySentences[i].score;
          }

          combination(i + 1);

          newKeys.forEach(key => selectedKeys.delete(key));

          currentScore -= keysAndScoreBySentences[i].score;
      }
  }

}

// ["line in line", "LINE", "in lion"]
// n 5 result 20