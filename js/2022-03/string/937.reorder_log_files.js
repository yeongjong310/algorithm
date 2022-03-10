// 1. afterLog, beforeLog 둘다 letter인 경우 문자열 비교를 통해 비오름차순 정렬을 한다. 단, 동일한 경우는 id에 의해 비 오름차순 한다.
// 2. afterLog만 letter인 경우 -1을 반환하여 first / second 순으로 정렬한다.
// 3. beforeLog만 letter인 경우 +1을 반환하여 second / first 순으로 정렬한다.
// 4. 둘다 digit의 경우는 0을 반환하여 위치를 변경하지 않는다.

// sort return positive b, a 순으로 순서가 유지된다.
// sort return negative a, b 순서로 순서가 바뀌게 된다.

// localeCompare의 경우 기준 str < 비교 str 인경우 -1, 그 반대는 1, 동일한 경우 0을 반환한다.
// after가 before보다 더 낮은 순위일 경우 -1을 반환하여 순서를 바꿔야 하기 때문에, after.localeCompare(before)을 적용하면 오름차순 정렬이 가능하다.

const isLetter = (str) => {
  const reg = new RegExp(/[a-zA-Z]/);
  return reg.test(str);
};

const reorderLogFiles = function (logs) {
  return logs.sort((after, before) => {
    const [afterId, ...afterLog] = after.split(' ');
    const [beforeId, ...beforeLog] = before.split(' ');

    if (isLetter(afterLog[0]) && isLetter(beforeLog[0])) {
      const sortValue = afterLog.join().localeCompare(beforeLog.join());
      return sortValue !== 0 ? sortValue : afterId.localeCompare(beforeId);
    } else if (isLetter(afterLog[0])) {
      return -1;
    } else if (isLetter(beforeLog[0])) {
      return 1;
    } else {
      return 0;
    }
  });
};
