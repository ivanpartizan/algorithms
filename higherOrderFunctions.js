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

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  return list.every((developer) => developer.language === list[0].language);
}

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
function findSenior(list) {
  const maxAge = Math.max(...list.map((developer) => developer.age));
  return list.filter((developer) => developer.age == maxAge);
}

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return continents.every((continent) =>
    list.some((developer) => developer.continent == continent)
  );
}

// Coding Meetup #10 - Higher-Order Functions Series - Create usernames
function addUsername(list) {
  list.forEach(
    (developer) =>
      (developer[
        "username"
      ] = `${developer.firstName.toLowerCase()}${developer.lastName[0].toLowerCase()}${
        new Date().getFullYear() - developer.age
      }`)
  );
  return list;
}

// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
function getAverageAge(list) {
  return Math.round(
    list.reduce((total, developer) => total + developer.age, 0) / list.length
  );
}

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
function findAdmin(list, lang) {
  return list.filter(
    (developer) => developer.language == lang && developer.githubAdmin == "yes"
  );
}

// Coding Meetup #14 - Higher-Order Functions Series - Order the food
function orderFood(list) {
  let object = {};
  list
    .map((developer) => developer.meal)
    .forEach((value) =>
      object[value] ? object[value]++ : (object[value] = 1)
    );
  return object;
}

// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
function findOddNames(list) {
  let listOfOddNames = [];
  list.forEach((developer) => {
    let sum = 0;
    for (let i = 0; i < developer.firstName.length; i++) {
      sum += developer.firstName.codePointAt(i);
    }
    if (sum % 2 == 1) {
      listOfOddNames.push(developer);
    }
  });
  return listOfOddNames;
}

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
function askForMissingDetails(list) {
  let missingDetails = [];
  list.filter((developer) => {
    for (let key in developer) {
      if (developer[key] == null) {
        developer["question"] = `Hi, could you please provide your ${key}.`;
        missingDetails.push(developer);
      }
    }
  });
  return missingDetails;
}

// Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
function sortByLanguage(list) {
  return list.sort((a, b) =>
    a.language == b.language
      ? a.firstName.localeCompare(b.firstName)
      : a.language.localeCompare(b.language)
  );
}

// 9, 13
