// Uppercase the first character
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function ucFirst(str) {
  return str === "" ? str : str[0].toUpperCase() + str.slice(1);
}

ucFirst("ivan milenkovic");

// Check for spam
function checkSpam(str) {
  let string = str.toLowerCase();
  if (string.includes("xxx") || string.includes("viagra")) {
    return true;
  }
  return false;
}

function checkSpam(str) {
  if (
    str.toLowerCase().includes("xxx") ||
    str.toLowerCase().includes("viagra")
  ) {
    return true;
  } else {
    return false;
  }
}

function checkSpam(str) {
  return str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
    ? true
    : false;
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

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);

// Extract the money
function extractCurrencyValue(str) {
  return +str.slice(1);
}

extractCurrencyValue("$120");

function extractCurrencyValuePlus(str) {
  let price = "";
  for (let char of str) {
    if (isFinite(char)) {
      price += char;
    }
  }
  return +price;
}

extractCurrencyValuePlus("$120");
