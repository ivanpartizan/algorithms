// Basic Math (Add or Subtract) 7kyu
function calculate(str) {
  str = str.replaceAll("plus", "+").replaceAll("minus", "-");

  let result = eval(str);
  return String(result);
}

calculate("1plus2plus3minus4");

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
