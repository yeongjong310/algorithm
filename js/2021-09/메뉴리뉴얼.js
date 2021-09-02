function solution(orders, courses) {
  const counterByLength = Array.from({ length: 11 }, () => ({})); // [{},{},{'AB': 2}, {'ABC':3}...]

  const combinator = (string, subString, startIndex, course) => {
    if (course === subString.length) {
      const sortedSubString = subString.split('').sort().join('');
      counterByLength[course][sortedSubString] = counterByLength[course][sortedSubString] + 1 || 1;
      return;
    }

    for (let i = startIndex; i < string.length; i++) {
      combinator(string, subString + string[i], i + 1, course);
    }
  };

  courses.forEach(course => {
    orders.forEach(order => {
      combinator(order, '', 0, course);
    });
  });

  const answer = [];

  courses.forEach(course => {
    const sortedCounter = Object.entries(counterByLength[course]).sort((a, b) => b[1] - a[1]);
    const maxCountSubStrings = sortedCounter.filter(
      ([_, count]) => count !== 1 && count === sortedCounter[0][1]
    );

    if (maxCountSubStrings.length !== 0) maxCountSubStrings.forEach(([subString]) => answer.push(subString));
  });

  return answer.sort();
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])); // ['AC', 'ACDE', 'BCFG', 'CDE']
console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])); // ['ACD', 'AD', 'ADE', 'CD', 'XYZ']
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4])); // ['WX', 'XY']
