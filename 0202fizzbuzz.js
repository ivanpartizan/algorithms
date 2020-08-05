for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    continue;
  } else if (i % 3 == 0) {
    console.log("Fizz");
    continue;
  } else if (i % 5 == 0) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}

// let three = "Fizz";
// let five = "Buzz";
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(three + five);
//     continue;
//   } else if (i % 3 == 0) {
//     console.log(three);
//     continue;
//   } else if (i % 5 == 0) {
//     console.log(five);
//     continue;
//   }
//   console.log(i);
// }
