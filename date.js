// Show a weekday
function getWeekDay(date) {
  let day = date.getDay();

  switch (day) {
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
  let day = date.getDay();
  day === 0 ? (day = 7) : day;
  return day;
}

getLocalDay(new Date(2020, 9, 12));

// Which day of month was many days ago?
function getDateAgo(date, days) {
  let newDate = new Date(date);

  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

let date = new Date(2020, 9, 12);
getDateAgo(date, 1);

// Last day of month?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
}

getLastDayOfMonth(2020, 1);

// How many seconds have passed today?
function getSecondsToday() {
  let today = new Date();
  return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}

getSecondsToday();

// How many seconds till tomorrow?
function getSecondsToTomorrow() {
  let today = new Date();
  let totalSecondsInADay = 86400;
  let secondsPassedToday =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
  return totalSecondsInADay - secondsPassedToday;
}

getSecondsToTomorrow();

// Format the relative date
function formatDate(date) {
  let now = new Date();
  let difference = now - date;

  if (difference < 1000) {
    return "right now";
  } else if (difference < 1000 * 60) {
    return `${Math.round(difference / 1000)} sec. ago`;
  } else if (difference < 1000 * 60 * 60) {
    return `${Math.round(difference / 1000 / 60)} min. ago`;
  } else {
    return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
      date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }.${date.getFullYear().toString().slice(-2)} ${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
  }
}

formatDate(new Date(2020, 9, 12));
