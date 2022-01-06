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
