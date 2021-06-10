// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
  return list.filter(
    (developer) =>
      developer.continent === "Europe" && developer.language === "JavaScript"
  ).length;
}

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
  list.map(
    (developer) =>
      (developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`)
  );
  return list;
}
