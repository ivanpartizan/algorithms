let arrays = [[1, 2, 3], [4, 5], [6]];

// ES5
arrays.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

// ES6
arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
