// Destructuring assignment
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// The maximal salary
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let topSalary = 0;
  let bestPaid = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      bestPaid = name;
    }
  }
  return bestPaid;
}

topSalary(salaries);
