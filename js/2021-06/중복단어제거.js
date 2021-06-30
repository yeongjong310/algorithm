function solution (arr) {
  return arr.filter((str, i) => arr.indexOf(str) === i);
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));