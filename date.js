// Show a weekday
function getWeekDay(date) {
  let weekDay = new Date(date).getDay();
  let day;

  switch (weekDay) {
    case 0:
      day = "SU";
      break;
    case 1:
      day = "MO";
      break;
    case 2:
      day = "TU";
      break;
    case 3:
      day = "WE";
      break;
    case 4:
      day = "TH";
      break;
    case 5:
      day = "FR";
      break;
    case 6:
      day = "SA";
      break;
  }
  return day;
}

getWeekDay(new Date(2020, 9, 12));

// European weekday
function getLocalDay(date) {
  let weekDay = new Date(date).getDay();
  if (weekDay == 0) {
    weekDay = 7;
  }
  let day;

  switch (weekDay) {
    case 1:
      day = "MO";
      break;
    case 2:
      day = "TU";
      break;
    case 3:
      day = "WE";
      break;
    case 4:
      day = "TH";
      break;
    case 5:
      day = "FR";
      break;
    case 6:
      day = "SA";
      break;
    case 7:
      day = "SU";
      break;
  }
  return day;
}

getLocalDay(new Date(2020, 9, 12));

// Which day of month was many days ago?

let newdate = new Date(2020, 11, 5);
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

getDateAgo(newdate, 1);
