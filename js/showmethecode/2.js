const WHEE = "WHEE";
const input = `8
WAHEWHEE
`
  .trim()
  .split("\n");

const str = input[1].replaceAll(/[^WHE]/g, "");

const result = [];

let answer = 0;

function recursive(start) {
  if (result.slice(0, 4).join("") === WHEE) {
    answer++;
  }

  for (let i = start; i < str.length; i++) {
    if (
      (result.length >= WHEE.length && str[i] === "E") ||
      str[i] === WHEE[result.length]
    ) {
      result.push(str[i]);
      recursive(i + 1);
      result.pop();
    }
  }
}
recursive(0);

console.log(answer);
