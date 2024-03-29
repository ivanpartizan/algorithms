function SeriesSum(n) {
  let series = [];

  for (let i = 1, denominator = 1; i <= n; i++, denominator += 3) {
    series.push(1 / denominator);
  }

  let sum = series.reduce((acc, value) => acc + value, 0);
  return sum.toFixed(2);
}

SeriesSum(5);

// Turn any word into a beef taco 7kyu
function tacofy(word) {
  let array = word.split("");

  let tacos = array
    .map((letter) => {
      if (/[aeiou]/i.test(letter)) return "beef";
      else if (letter.toLowerCase() == "c") return "cheese";
      else if (letter.toLowerCase() == "g") return "guacamole";
      else if (letter.toLowerCase() == "l") return "lettuce";
      else if (letter.toLowerCase() == "s") return "salsa";
      else if (letter.toLowerCase() == "t") return "tomato";
      else return "";
    })
    .filter((word) => word.length > 0);

  tacos.push("shell");
  tacos.unshift("shell");
  return tacos;
}

tacofy("ogl");
