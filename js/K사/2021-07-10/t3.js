function solution(arr) {
  const answer = [];

  const lis = Array.from({ length: arr.length }, () => 1);
  const dis = Array.from({ length: arr.length }, () => 0);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= arr[i]) lis[i] = lis[i - 1] + 1;
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i + 1] <= arr[i]) dis[i] = dis[i + 1] + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    answer.push(lis[i] + dis[i]);
  }

  return Math.max(...answer);
}

console.log(solution([8, 7, 3, 4, 4, 8, 2, 5, 1]));
