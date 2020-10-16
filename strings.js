// Uppercase the first character
function ucFirst(str) {
  let uC = str[0].toUpperCase();
  return uC + str.slice(1);
}

ucFirst("ivanmilenkovic");

// Check for spam
function checkSpam(str) {
  let string = str.toLowerCase();
  if (string.includes("xxx") || string.includes("viagra")) {
    return true;
  }
  return false;
}

checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");

// Truncate the text
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "\u2026";
  }
  return str;
}

// Extract the money
function extractCurrencyValue(str) {
  return +str.slice(1);
}

extractCurrencyValue("$120");