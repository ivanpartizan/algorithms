// Sum the properties
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  let payments = Object.values(salaries);

  for (let payment of payments) {
    sum += payment;
  }

  return sum;
}

sumSalaries(salaries);

// Count properties
function count(obj) {
  let countProperties = 0;

  for (let keys of Object.keys(obj)) {
    countProperties++;
  }

  return countProperties;
}

let user = {
  name: "John",
  age: 30,
};

count(user);

// short version
function count1(obj) {
  return Object.keys(obj).length;
}

count1(user);
