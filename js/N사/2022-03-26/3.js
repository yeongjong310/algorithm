// 1. employees를 순회
// 2. employee의 담당 업무중 하나라도 office_tasks에 존재하면 오피스 아니면 재택
// 3. 각 사원이 재택인지 오피스인지 파악
// 4. 소속팀이 모두 재택인지 파악
// 5. 모두 재택이라면 가장 앞자리 사원을 재택에서 제외
// 6. 재택근무자 반환

function solution(num_teams, remote_tasks, office_tasks, employees) {
  const remoteStatus = Array(employees.length + 1).fill(true);
  const workStatusByTeam = Array.from( // 팀별 직원 근무 소속표
      {length: num_teams + 1}, 
      () => ({office: new Set(), remote: new Set()})
  );
  
  remoteStatus[0] = null;
  workStatusByTeam[0] = null;

  employees.forEach((employee, index) => {
      const [team, ...tasks] = employee.split(' ');

      for (let i = 0; i < tasks.length; i++) {
          if (office_tasks.includes(tasks[i])) {
              remoteStatus[index + 1] = false;
              workStatusByTeam[team].office.add(index + 1);
              break;
          } else {
              workStatusByTeam[team].remote.add(index + 1);
          }
      }
  })

  const noOfficeTeams = workStatusByTeam.filter((teamStatus, index) => 
      index !== 0 && teamStatus.office.size === 0)

  const remoteEmployees = remoteStatus.map((employee, index) => employee === true && index).filter(num => num);

  noOfficeTeams.forEach(team => {
      const officeEmployee = remoteEmployees.indexOf(Math.min(...Array.from(team.remote)));
      remoteEmployees.splice(officeEmployee, 1);
  })

  return remoteEmployees;
}

// num_teams	remote_tasks	office_tasks	employees	result
// 3	["development","marketing","hometask"]	["recruitment","education","officetask"]	["1 development hometask","1 recruitment marketing","2 hometask","2 development marketing hometask","3 marketing","3 officetask","3 development"]	[1,4,5,7]
// 2	["design"]	["building","supervise"]	["2 design","1 supervise building design","1 design","2 design"]	[3,4]