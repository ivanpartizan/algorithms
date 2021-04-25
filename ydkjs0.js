const taxRate = 0.2;
const phonePrice = 499;
const accessoriesPrice = 11;
const maxSpending = 2000;

let bankBalance = +prompt("What is your bank balance?");

let amount = 0;

function calculateTax(amount) {
  return amount * taxRate;
}

function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}

while (amount < bankBalance) {
  amount += phonePrice;

  if (amount < maxSpending) {
    amount += accessoriesPrice;
  }
}

amount += calculateTax(amount);

console.log(`Your price is ${formatAmount(amount)}`);

if (amount < bankBalance) {
  console.log(`I can buy this!`);
} else {
  console.log(`I have no money for this!`);
}
