const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
      // console.log(start, end)
    }
    if (start > end) {
      let temp;
      temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end ? true : false;
    return isInRange;
  },
  words(string) {
    let words = string.split(" ");
    return words;
  },
  pad(string, stringLength) {
    if (string.length >= stringLength) {
      return string;
    } else {
      let padString;
      let padStart = Math.floor((stringLength - string.length) / 2);
      let padEnd = stringLength - string.length - padStart;

      // let padStringStart = '';
      // let padStringEnd = '';

      // for (let i = 0; i < padStart; i++){
      //   padStringStart += ' '
      // }
      // for (let i = 0; i < padEnd; i++){
      //   padStringEnd += ' '
      // }

      // padString = padStringStart + string + padStringEnd;
      padString = " ".repeat(padStart) + string + " ".repeat(padEnd);
      return padString;
    }
  },
  has(object, path) {
    for (key in object) {
      // let hasValue = object[path] !== undefined ? true : false;
      // return hasValue;
      if (object[path] === undefined) {
        return false;
      }
      return true;
    }
  },
  invert(object) {
    let newObject = {};
    for (key in object) {
      newObject[object[key]] = key;
      // let originalValue = object[key];
      // newObject[originalValue] = key
    }
    return newObject;
  },
};
