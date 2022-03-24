// 핵심은 작업이 기다리는 시간의 합을 최소화 해야 함
// 현재 처리가능한 요청 중에서 가장 짧은 작업시간을 우선 처리하면 나머지 작업이 기다리는 시간이 줄어든다.
// jobs를 요청 시간으로 정렬하고, 현재 시간과 비교하여 시작이 가능한 순간에 우선순위 큐에 삽입한다.
// 우선순위 단위는 짧은 작업시간으로 한다.
// 작업이 끝나면 우선순위 큐의 첫번째 작업을 시작하고
// 대기열이 비어있다며 다음 jobs를 먼저 시작한다.

function solution(jobs) {
  const lengthJobs = jobs.length;
  let result = 0;

  jobs.sort((a, b) => a[0] - b[0]);

  let currentTime = 0;
  let runningTaskEndTime = 0;

  const priorityQueue = [];

  while (priorityQueue.length !== 0 || jobs.length !== 0) {
    const startTimeOfNextJob = jobs[0] && jobs[0][0];

    if (currentTime >= startTimeOfNextJob) {
      const jobCandidate = jobs.shift();
      priorityQueue.push(jobCandidate);
      priorityQueue.sort((a, b) => a[1] - b[1]); // 소요시간이 작은 순으로 우선순위 정렬
      continue; // continue가 필요한 이유는 jobs 의 다음 목록도 대기열에 추가될 가능성이 있기 때문에 가능한 모든 후보를 등록 후 우선순위에 따라 작업을 시행해야한다.
    }

    // 다음 작업 실행 조건
    // 1. 현재 시간이 작업중인 task가 끝나는 시간을 넘어간 경우
    // 2. 현재 시간이 첫번째 대기 작업의 시작 시간을 넘어간 경우
    if (
      currentTime >= runningTaskEndTime &&
      priorityQueue[0] &&
      currentTime >= priorityQueue[0][0]
    ) {
      const nextTask = priorityQueue.shift(); // 실행할 작업 대기열에서 pop
      runningTaskEndTime = currentTime + nextTask[1]; // 작업이 끝나는 시간은 현재 시간 + 소요 시간

      result += runningTaskEndTime - nextTask[0]; // 걸린시간은 끝나는 시간 - 요청 시간
    }

    // console.log(currentTime, runningTaskEndTime, result, priorityQueue, jobs)
    currentTime++;
  }

  return Math.floor(result / lengthJobs);
}
