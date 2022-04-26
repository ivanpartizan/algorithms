// Narcissistic Numbers
function isNarcissistic(n) {
  let numberLength = String(n).length;
  let sum = String(n)
    .split("")
    .reduce((acc, value) => (acc += value ** numberLength), 0);
  return sum == n;
}

isNarcissistic(153);

// Simple Fun #193: Moment Of Time In Space
function momentOfTimeInSpace(moment) {
  let past, present, future;

  let regex = /[1-9]/g;
  let sum = moment.match(regex).reduce((acc, value) => acc + +value, 0);

  let notIncreasingChars = 0;

  for (let char of moment) {
    if (/[^1-9]/.test(char)) {
      notIncreasingChars++;
    }
  }

  past = sum < notIncreasingChars;
  present = sum == notIncreasingChars;
  future = sum > notIncreasingChars;

  return [past, present, future];
}

momentOfTimeInSpace("12:30 am");
