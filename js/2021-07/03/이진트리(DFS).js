function solution(n) {
  let answer = "";
  function preOrder(v) {
    if (v > 7) return;
    answer += v + " ";
    preOrder(v * 2)
    preOrder(v * 2 + 1)
  }
  function inOrder(v) {
    if (v > 7) return;
    inOrder(v * 2)
    answer += v + " ";
    inOrder(v * 2 + 1)
  }
  function postOrder(v) {
    if (v > 7) return;
    postOrder(v * 2)
    postOrder(v * 2 + 1)
    answer += v + " ";
  }
  preOrder(n);
  answer += "\n";
  inOrder(n);
  answer += "\n";
  postOrder(n);

  return answer;
}
console.log(solution(1));
