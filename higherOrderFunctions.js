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

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  return list.some((developer) => developer.language === "Ruby");
}

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
function getFirstPython(list) {
  const found = list.find((developer) => developer.language === "Python");
  return found === undefined
    ? `There will be no Python developers`
    : `${found.firstName}, ${found.country}`;
}

// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
function countLanguages(list) {
  const object = {};
  list.forEach((developer) => {
    if (developer.language in object) {
      object[developer.language]++;
    } else {
      object[developer.language] = 1;
    }
  });
  return object;
}
