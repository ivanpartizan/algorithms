// Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0;
  let start = arr[0];
  let end = arr[1];

  if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
  if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
    return sum;
  }
}

sumAll([1, 4]);

// Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy
function destroyer(arr, ...args) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter((obj) => {
    return sourceKeys.every((key) => {
      return obj.hasOwnProperty(key) && source[key] == obj[key];
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

// Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");

// Pig Latin
function translatePigLatin(str) {
  let vowelPosition = str.search(/[aeiou]/);
  if (vowelPosition == -1) {
    return `${str}ay`;
  }
  if (vowelPosition == 0) {
    return `${str}way`;
  } else {
    let slice = str.slice(0, vowelPosition);
    let left = str.slice(vowelPosition);
    return `${left}${slice}ay`;
  }
}

translatePigLatin("consonant");
