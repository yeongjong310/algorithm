// 리스트 변환
const isPalindrome1 = function (head) {
  const arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }

  return true;
};

// 투 포인터

const isPalindrome2 = function (head) {
  const arr = [];
  let slower = head;
  let faster = head;

  while (faster && faster.next) {
    [slower, slower.before] = [slower.next, slower];
    faster = faster.next.next;
  }

  let reverser = slower;

  if (faster) {
    reverser = slower;
  } else {
    reverser = slower.before;
  }

  while (slower) {
    if (slower.val !== reverser.val) {
      return false;
    }

    slower = slower.next;
    reverser = reverser.before;
  }

  return true;
};
