function formatDuration(seconds) {
  const secondsInAYear = 31536000;
  const secondsInADay = 86400;
  const secondsInAnHour = 3600;
  const secondsInAMinute = 60;

  let year, day, hour, minute, second, remainder;

  if (seconds == 0) {
    return "now";
  }

  if (seconds == 60) {
    return "1 minute";
  }

  if (seconds == 3600) {
    return "1 hour";
  }

  if (seconds > secondsInAYear) {
    year = parseInt(seconds / secondsInAYear);
    remainder = seconds % secondsInAYear;

    day = parseInt(remainder / secondsInADay);
    remainder = remainder % secondsInADay;

    hour = parseInt(remainder / secondsInAnHour);
    remainder = remainder % secondsInAnHour;

    minute = parseInt(remainder / secondsInAMinute);
    remainder = remainder % secondsInAMinute;

    second = remainder;

    if (hour == 0) {
      return `${year > 1 ? `${year} years` : `${year} year`}, ${
        day > 1 ? `${day} days` : `${day} day`
      }, ${minute > 1 ? `${minute} minutes` : `${minute} minute`} and ${
        second > 1 ? `${second} seconds` : `${second} second`
      }`;
    }

    if (minute == 0) {
      return `${year > 1 ? `${year} years` : `${year} year`}, ${
        day > 1 ? `${day} days` : `${day} day`
      }, ${hour > 1 ? `${hour} hours` : `${hour} hour`} and ${
        second > 1 ? `${second} seconds` : `${second} second`
      }`;
    }

    if (second == 0) {
      return `${year} years, ${day} days, ${hour} hours and ${minute} minutes`;
    }

    return `${year > 1 ? `${year} years` : `${year} year`}, ${
      day > 1 ? `${day} days` : `${day} day`
    }, ${hour > 1 ? `${hour} hours` : `${hour} hour`}, ${
      minute > 1 ? `${minute} minutes` : `${minute} minute`
    } and ${second > 1 ? `${second} seconds` : `${second} second`}`;
  }

  if (seconds > secondsInADay) {
    day = parseInt(seconds / secondsInADay);
    remainder = seconds % secondsInADay;

    hour = parseInt(remainder / secondsInAnHour);
    remainder = remainder % secondsInAnHour;

    minute = parseInt(remainder / secondsInAMinute);
    remainder = remainder % secondsInAMinute;

    second = remainder;

    if (hour == 0) {
      return `${day > 1 ? `${day} days` : `${day} day`}, ${
        minute > 1 ? `${minute} minutes` : `${minute} minute`
      } and ${second > 1 ? `${second} seconds` : `${second} second`}`;
    }

    if (minute == 0) {
      return `${day > 1 ? `${day} days` : `${day} day`}, ${
        hour > 1 ? `${hour} hours` : `${hour} hour`
      } and ${second > 1 ? `${second} seconds` : `${second} second`}`;
    }

    if (second == 0) {
      return `${day} days, ${hour} hours and ${minute} minutes`;
    }

    return `${day > 1 ? `${day} days` : `${day} day`}, ${
      hour > 1 ? `${hour} hours` : `${hour} hour`
    }, ${minute > 1 ? `${minute} minutes` : `${minute} minute`} and ${
      second > 1 ? `${second} seconds` : `${second} second`
    }`;
  }

  if (seconds > secondsInAnHour) {
    hour = parseInt(seconds / secondsInAnHour);
    remainder = seconds % secondsInAnHour;

    minute = parseInt(remainder / secondsInAMinute);
    remainder = remainder % secondsInAMinute;

    second = remainder;

    if (second == 0) {
      return `${hour} hours and ${minute} minutes`;
    }

    return `${hour > 1 ? `${hour} hours` : `${hour} hour`}, ${
      minute > 1 ? `${minute} minutes` : `${minute} minute`
    } and ${second > 1 ? `${second} seconds` : `${second} second`}`;
  }

  if (seconds > secondsInAMinute) {
    minute = parseInt(seconds / secondsInAMinute);
    remainder = seconds % secondsInAMinute;

    second = remainder;

    if (second == 0) {
      return `${minute} minutes`;
    }

    return `${minute > 1 ? `${minute} minutes` : `${minute} minute`} and ${
      second > 1 ? `${second} seconds` : `${second} second`
    }`;
  }

  if (seconds < secondsInAMinute) {
    second = seconds;

    return second == 1 ? `${second} second` : `${second} seconds`;
  }
}
