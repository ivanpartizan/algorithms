let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let set = new Set();

  for (let value of values) {
    set.add(value);
  }

  console.log(set);
}

unique(values);

/////
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
alert(a + b);

function readNumber() {
  let num;
  do {
    num = +prompt("Enter a valid number");
  } while (isFinite(num));
  if (num === "" || num === null) {
    return null;
  }
}
readNumber();

function random(min, max) {
  let num = Math.random() * max + min;
}
random(1, 5);
