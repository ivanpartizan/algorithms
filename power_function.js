function pow(x, n) {
  let result = x;
  for (let pow = 1; pow < n; pow++) {
    result *= x;
  }
  return result;
}

let x = +prompt("Enter number");
let n = +prompt("Enter number's power");

if (n > 0) {
  pow(x, n);
} else {
  alert(`Enter number greater than ${n}`);
}
