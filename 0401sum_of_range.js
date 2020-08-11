function range(start, end, step = start < end ? 1 : -1) {
  let numbers = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

function sum(range) {
  let sum = 0;
  for (let number of range) {
    sum += number;
  }
  return sum;
}

console.log(range(1, 10, 2));
sum(range(1, 10, 2));

// function range(start, end) {
//   let numbers = [];
//   for (let i = start; i <= end; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// function sum(range) {
//   let sum = 0;
//   for (let number of range) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(range(1, 10));
// sum(range(1, 10));
