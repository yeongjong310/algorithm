function solution(infos, actions) {
  const answer = [];
  let isLogIned = false;
  let basket = [];

  const passwordsByid = {};

  infos.forEach(info => {
    const [id, password] = info.split(' ');
    passwordsByid[id] = password;
  });

  actions.forEach(actionStr => {
    const action = actionStr.split(' ');
    const actionType = action[0];

    if (!isLogIned) {
      if (actionType === 'LOGIN' && passwordsByid[action[1]] === action[2]) {
        isLogIned = true;

        answer.push(true);
      }
      else {
        answer.push(false);
      }
    }

    else if (isLogIned && actionType === 'LOGIN') {
      answer.push(false);
    }

    else if (actionType === 'ADD') {
      const itemId = action[1];

      basket.push(itemId);
      answer.push(true);
    }

    else if (actionType === 'ORDER') {
      if (basket.length === 0) answer.push(false);
      else {
        basket = [];
        answer.push(true);
      }
    }
  });

  return answer;
}

const infos = ["kim password", "lee abc"]
const actions = [
  "ADD 30",
  "LOGIN kim abc",
  "LOGIN lee password",
  "LOGIN kim password",
  "LOGIN kim password",
  "LOGIN lee abc",
  "ADD 30",
  "ORDER",
  "ORDER",
  "ADD 40",
  "ADD 50"
];

console.log(solution(infos, actions));