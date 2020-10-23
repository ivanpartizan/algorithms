// New Calculator
function Calculator() {
  this.read = function () {
    this.a = +prompt("Enter first number");
    this.b = +prompt("Enter second number");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert(`Sum is ${calculator.sum()}`);
alert(`Product is ${calculator.mul()}`);

// New Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.currentValue = +prompt("Enter a number to add...");
    this.value += this.currentValue;
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
