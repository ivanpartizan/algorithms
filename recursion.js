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
function sumToRecursive(n) {
  if (n == 0) {
    return 0;
  } else {
    return (n += sumToRecursive(n - 1));
  }
}

sumToRecursive(10);

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

// N-th Fibonacci
function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n - 1];
}

// Complete Fibonacci Series
function fibonacci(n) {
  // Return Fibonacci array of n elements
  if (n <= 0) {
    return [];
  }

  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr.slice(0, n);
}

// Practice
const person = {
  name: "Ivan",
  friend: {
    name: "Joe",
    friend: {
      name: "Mike",
      friend: {
        name: "Kevin",
      },
    },
  },
};

function printNames(object) {
  if (object == null) return;
  else {
    console.log(object.name);
    printNames(object.friend);
  }
}

printNames(person);
