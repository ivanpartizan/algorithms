// Sum all numbers till the given one
// Using a for loop
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

sumTo(100);

// Using a recursion
