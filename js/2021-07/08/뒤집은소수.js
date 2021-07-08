const solution = nums => {
  const reversedNums = nums.map(num => +(num + '').split('').reverse().join(''));

  function isPrime(num) {
    for (let i = 2; i < Math.ceil(num / 2); i++) {
      if ((num % i) === 0) return false;
    }

    return num !== 1;
  }

  return reversedNums.filter(isPrime);
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
