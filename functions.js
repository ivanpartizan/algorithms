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

// Roman Numerals Encoder

const romanEncoder = (number) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";
  for (let key in romanNumbers) {
    while (number >= romanNumbers[key]) {
      roman += key;
      number -= romanNumbers[key];
    }
  }
  return roman;
};

romanEncoder(2020);
