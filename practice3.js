// The Barksdale Code
function decode(string) {
  return string
    .split("")
    .map((num) => {
      return num == "5" ? "0" : num == "0" ? "5" : 10 - num;
    })
    .join("");
}

decode("4103432323");

// Multiplication table
multiplicationTable = function (size) {
  let table = [];

  for (let i = 1; i <= size; i++) {
    let inner = [];

    for (let j = 1; j <= size; j++) {
      inner.push(i * j);
    }
    table.push(inner);
  }

  return table;
};

multiplicationTable(5);

// Sorting the Odd way!
function sortItOut(array) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(array[i]) % 2 == 0) {
      evenNumbers.push(array[i]);
    } else {
      oddNumbers.push(array[i]);
    }
  }
  evenNumbers.sort((a, b) => b - a);
  oddNumbers.sort((a, b) => a - b);
  return oddNumbers.concat(evenNumbers);
}

sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]);

// Sort the odd
function sortArray(array) {
  let oddNumbers = array
    .filter((num) => num % 2 == 1 || num % 2 == -1)
    .sort((a, b) => a - b);
  return array.map((num, index) => (num % 2 == 0 ? num : oddNumbers.shift()));
}

sortArray([5, 3, 2, 8, 1, 4]);
