function solution(a, b, c){
    let answer = b < c ? b : c;

    if (answer > a) {
      answer = a
    }
    return answer;
}

console.log(solution(6, 5, 11));