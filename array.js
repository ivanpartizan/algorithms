// Sum input numbers
function sumInput() {
  let array = [];
  let value;
  let sum = 0;

  while (true) {
    value = prompt("Enter a number");

    if (!isFinite(value) || value === "" || value === null) {
      break;
    } else {
      array.push(value);
      // console.log(array);
    }
  }

  for (let number of array) {
    sum += +number;
  }
  return sum;
}

sumInput();

// A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;
    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      maxSum = Math.max(maxSum, subSum);
    }
  }
  return maxSum;
}

getMaxSubSum([2, -1, 2, 3, -9]);

function getMaxSubSumNew(arr) {
  let maxSum = 0;
  let subSum = 0;

  for (let number of arr) {
    subSum += number;
    maxSum = Math.max(maxSum, subSum);

    if (subSum < 0) {
      subSum = 0;
    }
  }
  return maxSum;
}

getMaxSubSumNew([-1, 2, 3, -9, 11]);

// Translate border-left-width to borderLeftWidth
function camelize(str) {
  let array = str.split("-");
  let words = array.map((word, index) =>
    index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  let newStr = words.join("");
  // word.join(';')
  return newStr;
}

camelize("background-color");
camelize("list-style-image");

// Filter range

let arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let newArr = arr.filter((number) => number >= a && number <= b);
  return newArr;
}

let filtered = filterRange(arr1, 1, 4);
