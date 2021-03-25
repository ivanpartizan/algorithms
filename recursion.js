// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer to the base case and return when needed
// Usually 2 returns, one for base case and one for recursive case

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

// Factorial
function findFactorialIterative(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

findFactorialIterative(5);

function findFactorialRecursive(number) {
  if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * findFactorialRecursive(number - 1);
  }
}

findFactorialRecursive(5);
