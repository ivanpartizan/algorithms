const finalGrade = (number1, number2, number3) => {
  if (
    number1 < 0 ||
    number1 > 100 ||
    number2 < 0 ||
    number2 > 100 ||
    number3 < 0 ||
    number3 > 100
  ) {
    return `You have entered an invalid grade.`;
  } else {
    let average = (number1 + number2 + number3) / 3;
    if (average >= 0 && average <= 59) {
      return "F";
    } else if (average <= 69) {
      return "D";
    } else if (average <= 79) {
      return "C";
    } else if (average <= 89) {
      return "B";
    } else {
      return "A";
    }
  }
};

finalGrade(99, 92, 95);

const howOld = (age, year) => {
  let born = 2020 - age;
  if (year > 2020) {
    return `You will be ${year - born} in the year ${year}`;
  }
  if (year < born) {
    return `The year ${year} was ${born - year} years before you were born`;
  }
  if (year < 2020 && year > born) {
    return `You were ${year - born} in the year ${year}`;
  }
};

howOld(34, 1990);
