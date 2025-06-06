// Basic Math (Add or Subtract) 7kyu
function calculate(str) {
  str = str.replaceAll("plus", "+").replaceAll("minus", "-");

  let result = eval(str);
  return String(result);
}

calculate("1plus2plus3minus4");

// Magic Sum of 3s 7kyu
function magicSum(numbers) {
  let sum = 0;

  let oddNumbersWithDigit3 = numbers
    .filter((number) => number % 2 === 1)
    .map((number) => String(number))
    .filter((digit) => digit.includes(3))
    .map((number) => +number);

  for (let number of oddNumbersWithDigit3) {
    sum += number;
  }

  return sum;
}

magicSum([3, 12, 5, 8, 30, 13]);

// Powers of 3 7kyu
function largestPower(n) {
  let x = 0;

  for (let i = 0; i < n / 3; i++) {
    if (3 ** i < n) {
      x = i;
    }
  }

  return x;
}

largestPower(82);
