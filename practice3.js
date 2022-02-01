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
