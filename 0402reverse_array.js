function reverseArray(array) {
  let newArray = [];

  for (let i = array.length; i > 0; i--) {
    let popped = array.pop();
    newArray.push(popped);
  }
  return newArray;
}

reverseArray([11, 22, 33, 44, 55]);

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array.splice(i, 1)[0];
    array.unshift(temp);
  }
  return array;
}

reverseArrayInPlace([11, 22, 33, 44, 55]);
