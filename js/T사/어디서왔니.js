function parseSearch(search) {
  /* 쿼리 문자열 `search`를 파싱하는 함수를 작성해주세요. */
  if (!search.match(/[?]/)) return {};

  const answer = {};

  // console.log(search.match(/\w+=\w+/g));

  search.match(/\w+=\w+/g).forEach(query => {
    const [key, value] = query.split('=');

    if (Array.isArray(answer[key])) {
      answer[key].push(value);
    }
    if (typeof answer[key] === 'string') {
      answer[key] = [answer[key], value];
    }
    if (!answer[key]) {
      answer[key] = value;
    }
  });

  return answer;
}

console.log(parseSearch('?range)=1&range=8&from=twitter'));
// console.log(parseSearch('?from=twitter'));
