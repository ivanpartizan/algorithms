function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

function everyNew(array, test) {
  return !array.some((element) => !test(element));
}
