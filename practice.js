// Reverse A String
function reverse(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

reverse("Ivan");

function reverse1(str) {
  return str.split("").reverse().join("");
}

reverse1("Ivan Milenkovic");

// Merge Sorted Arrays
function mergeSortedArrays(array1, array2) {
  let merged = [];

  for (let i = 0; i < array1.length; i++) {
    merged.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    merged.push(array2[i]);
  }

  return merged.sort((a, b) => a - b);
}

mergeSortedArrays([11, 88, 22, 5, 4], [33, 6, 7, 90]);
