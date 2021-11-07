function calcParkingTime(IN, OUT) {
  let parkingTime = 0;

  const [inHours, inMinutes] = IN.split(':');
  const [outHours, outMinutes] = OUT.split(':');

  parkingTime += (Number(outHours) - Number(inHours)) * 60;
  parkingTime += Number(outMinutes) - Number(inMinutes);

  return parkingTime;
}

function calcFee(accTime, fees) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  let fee = defaultFee;

  if (defaultTime < accTime) {
    fee += Math.ceil((accTime - defaultTime) / unitTime) * unitFee;
  }

  return fee;
}

function solution(fees, records) {
  const accTimeByCar = {};
  const inTimeByCar = {};

  records.forEach((info, i) => {
    const [time, carNumber, inOut] = info.split(' ');

    if (inOut === 'IN') inTimeByCar[carNumber] = time;

    if (inOut === 'OUT') {
      const parkingTime = calcParkingTime(inTimeByCar[carNumber], time);
      accTimeByCar[carNumber] = accTimeByCar[carNumber] + parkingTime || parkingTime;
      inTimeByCar[carNumber] = -1;
    }

    if (i === records.length - 1) {
      const leftCars = Object.entries(inTimeByCar).filter(([_, inTime]) => inTime !== -1);

      leftCars.forEach(([leftCar, inTime]) => {
        const parkingTime = calcParkingTime(inTime, '23:59');
        accTimeByCar[leftCar] = accTimeByCar[leftCar] + parkingTime || parkingTime;
      });
    }
  });

  return Object.entries(accTimeByCar)
    .sort((a, b) => a[0] - b[0])
    .map(([_, accTime]) => calcFee(accTime, fees));
}

const fees = [180, 5000, 10, 600];
const records = ['05:34 5961 IN', '06:00 0000 IN', '06:34 0000 OUT', '07:59 5961 OUT', '07:59 0148 IN', '18:59 0000 IN', '19:09 0148 OUT', '22:59 5961 IN', '23:00 5961 OUT'];
// [14600, 34400, 5000];

console.log(solution(fees, records));
