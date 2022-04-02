function solution(logs) {
  const unVaildLogs = logs.filter(log => {
      if (log.length > 100) {
          return true;
      } else {
          return !/^team_name : [a-zA-Z]+ application_name : [a-zA-Z]+ error_level : [a-zA-Z]+ message : [a-zA-Z]+$/.test(log)
      }
  })

  return unVaildLogs.length
}

// ["team_name : db application_name : dbtest error_level : info message : test", "team_name : test application_name : I DONT CARE error_level : error message : x", "team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever", "team_name : oberervability application_name : LogViewer error_level : error"]
// 3