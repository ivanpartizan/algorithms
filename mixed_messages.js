let randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

let year = "1";
while (year.length < 4) {
  year += randomNumber();
}

let empires = [
  "British Empire",
  "Russia",
  "Mongol Empire",
  "China",
  "Japan",
  "Spain",
  "Roman Empire",
  "Greece",
  "Egypt",
  "Turkey",
];

let country = empires[randomNumber()];

const generateEmperor = (country) => {
  switch (country) {
    case "British Empire":
      return "James";
      break;
    case "Russia":
      return "Petar";
      break;
    case "Mongol Empire":
      return "Genghis Khan";
      break;
    case "China":
      return "Ming";
      break;
    case "Japan":
      return "Meiji";
      break;
    case "Spain":
      return "Isabella";
      break;
    case "Roman Empire":
      return "Julius Caesar";
      break;
    case "Greece":
      return "Pythagoras";
      break;
    case "Egypt":
      return "Cleopatra";
      break;
    case "Turkey":
      return "Murad";
      break;
    default:
      return "Unknown!";
      break;
  }
};

console.log(
  `I guess you were born in ${year}, which means you are ${
    new Date().getFullYear() - +year
  } now. Your birthplace is ${country} and your emperor is ${generateEmperor(
    country
  )}`
);
