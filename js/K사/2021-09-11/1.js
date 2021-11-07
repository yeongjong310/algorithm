function solution(idList, report, k) {
  const userInfo = {};

  idList.forEach(userId => {
    userInfo[userId] = {
      sentReportSet: new Set(),
      receivedReports: new Set()
    };
  });

  report.forEach(data => {
    const [senderId, receiverId] = data.split(' ');

    userInfo[senderId].sentReportSet.add(receiverId);
    userInfo[receiverId].receivedReports.add(senderId);
  });

  return Object.entries(userInfo).map(([userId, { sentReportSet }]) => {
    let receivedMails = 0;

    for (const receiverId of sentReportSet) {
      if (userInfo[receiverId].receivedReports.size >= k) receivedMails++;
    }

    return receivedMails;
  });
}

const idList = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];

console.log(solution(idList, report, 2));