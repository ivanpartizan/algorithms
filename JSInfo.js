// Check the login
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
let userName = prompt("Who's there");

if (userName == "Admin") {
  let password = prompt("Enter your password");

  if (password == "TheMaster") {
    alert("Welcome");
  } else if (password === null || password === "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === null || userName === "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}

// Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
while (true) {
  let number = prompt("Enter a number greater than 100");

  if (number > 100 || number == null || number == "") {
    break;
  }
}

// Output prime numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.
let n = 10;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) alert(i);
}

// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  return a < b ? a : b;
}

min(2, 5);

// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// P.S. In this task the function should support only natural values of n: integers up from 1.
let x = prompt("Enter x");
let n = prompt("Enter n");

function pow(x, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= x;
  }

  return result;
}

pow(x, n);
