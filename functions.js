// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

const sumDigPow = (a, b) => {
  let result = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;
    let digits = i.toString();
    for (let j = 0; j < digits.length; j++) {
      sum += Math.pow(+digits[j], j + 1);
    }
    if (sum == i) {
      result.push(i);
    }
  }
  return result;
};

sumDigPow(1, 150);
