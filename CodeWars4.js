// Basic Math (Add or Subtract) 7kyu
function calculate(str) {
  str = str.replaceAll("plus", "+").replaceAll("minus", "-");

  let result = eval(str);
  return String(result);
}

calculate("1plus2plus3minus4");
