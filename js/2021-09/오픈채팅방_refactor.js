function solution(record) {
  const MESSAGES = {
    Leave: '님이 나갔습니다.',
    Enter: '님이 들어왔습니다.'
  };

  const userLogs = [];
  const visitedUserNickName = {};

  const log = (uid, state) => {
    if (!(state in MESSAGES)) throw new Error('알수 없는 행위입니다.');
    userLogs.push([uid, MESSAGES[state]]);
  };

  const changeNickName = (uid, nickName) => {
    visitedUserNickName[uid] = nickName;
  };

  record.forEach(query => {
    const [state, uid, nickName] = query.split(' ');

    if (state === 'Leave' || state === 'Enter') log(uid, state);
    if (state === 'Enter' || state === 'Change') changeNickName(uid, nickName);
  });

  return userLogs.map(([uid, message]) => visitedUserNickName[uid] + message);
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(solution(record)); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]