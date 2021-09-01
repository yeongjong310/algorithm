function solution(record) {
  const FUNCS = {
    Leave: 'Leave',
    Change: 'Change',
    Enter: 'Enter'
  };

  const userLogs = new Map();
  let curLine = 0;

  const Leave = (uid) => {
    userLogs.get(uid).get('comments').push([FUNCS.Leave, ++curLine]);
  };

  const Change = (uid, nickName) => {
    userLogs.get(uid).set('nickName', nickName);
  };

  const Enter = (uid, nickName) => {
    if (!userLogs.get(uid)) {
      userLogs.set(uid, new Map());

      const userLog = userLogs.get(uid);
      userLog.set('comments', []);
    }

    if (userLogs.get(uid).get('nickName') !== nickName) {
      Change(uid, nickName);
    }

    userLogs.get(uid).get('comments').push([FUNCS.Enter, ++curLine]);
  };

  record.forEach(query => {
    const [func, uid, nickName] = query.split(' ');

    if (func === FUNCS.Leave) Leave(uid);
    if (func === FUNCS.Change) Change(uid, nickName);
    if (func === FUNCS.Enter) Enter(uid, nickName);
  });

  return (
    [...userLogs.values()]
      .flatMap(userLog => userLog
        .get('comments')
        .map(comment => [userLog.get('nickName'), ...comment]))
      .sort((a, b) => a[2] - b[2])
      .map(([nickName, func]) => {
        if (FUNCS.Leave === func) return `${nickName}님이 나갔습니다..`;
        if (FUNCS.Enter === func) return `${nickName}님이 들어왔습니다.`;
      })
  );
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(solution(record));