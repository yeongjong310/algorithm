// 1. stack[-1] 보다 높거나 같은 current를 만나면 빗물을 채울 수 있다.
// 2. 빗물은 height[stack[-1]] * (current - stack[-1] - 1) === height * distance
// 3. 2번 사이의 장벽이 존재할 수 있다. 이를 방지하기 위해 1번이 발생하면 즉각 빗물을 채워버린다.

// 1.stack을 활용하여 변곡점(height index)을 하나씩 쌓는다.
// 2.stack top보다 높거나 같으면 빗물을 채울 수 있다. while (heights[stack.slice(-1)] < height)
// 3.두번째 전 변곡점과 현재 변곡점의 최소 높이 * 장변간 거리가 채워질 빗물이다.
// 4.(중요) while문을 빠져나와 현재 장벽의 index를 stack에 삽입하면
// 이전 변곡점과 다음 변곡점의 사이에는 현재 장벽(채워진 빗물)이 존재하기 때문에,
// [2, 1, 0, 1, 3] 과 같은 경우
// [2, 1, 3] 으로 변경되며 2와 3 사이의 채워질 빛물 높이(2 - 1)를 구할 수 있다.

const trap = function (heights) {
  const stack = [];
  let volume = 0;

  heights.forEach((height, index) => {
    while (stack.length !== 0 && heights[stack.slice(-1)] < height) {
      const top = stack.pop();

      if (stack.length === 0) {
        break;
      }

      const distance = index - stack.slice(-1) - 1;

      const waters =
        Math.min(heights[stack.slice(-1)], heights[index]) - heights[top];

      volume += waters * distance;
    }

    stack.push(index);
  });

  return volume;
};
