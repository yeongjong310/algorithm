const solution = (person, cow) => {
  const moves = [-1, 1, 5];
  const dp = Array.from({length: 10001}, () => 0);
  const queue = [];

  queue.push([person, 0]);

  while (queue.length) {
    const [person, level] = queue.shift();
    for (let move of moves) {
      const movedPerson = person + move;
      if (dp[movedPerson]) continue;
    
      if ((movedPerson) === cow) {
        return level + 1;
      } 
      queue.push([person + move, level + 1]);
      dp[person + move] = 1;
    }
  }
}

console.log(solution(5, 14));