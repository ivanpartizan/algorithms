// Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let salary in salaries) {
  sum += salaries[salary];
}

alert(sum);

// Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

multiplyNumeric(menu);

// Check for emptiness
let user = {
  name: "Ivan",
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

isEmpty(user);

function isEmpty(obj) {
  if (key in obj) {
    return false;
  } else return true;
}

isEmpty(user);
