// IP Validation
function isValidIP(str) {
  console.log(str);
  if (
    str == "" ||
    str.includes(" ") ||
    str.includes(",") ||
    /\r|\n/.test(str) ||
    /[a-zA-Z]/.test(str)
  ) {
    return false;
  } else {
    let octets = str.split(".");

    if (
      octets.length != 4 ||
      octets.some(
        (value) =>
          (value.length > 1 && value[0] == 0) || value == "" || value == "-0"
      )
    ) {
      return false;
    } else {
      if (octets.every((value) => value >= 0 && value < 256)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

isValidIP("12.255.56.1");

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
