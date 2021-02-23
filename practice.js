// Reverse A String
function reverse(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

reverse("Ivan");

function reverse1(str) {
  return str.split("").reverse().join("");
}

reverse1("Ivan Milenkovic");

// Merge Sorted Arrays
function mergeSortedArrays(array1, array2) {
  let merged = [];

  for (let i = 0; i < array1.length; i++) {
    merged.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    merged.push(array2[i]);
  }

  return merged.sort((a, b) => a - b);
}

mergeSortedArrays([11, 88, 22, 5, 4], [33, 6, 7, 90]);

// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// Check the login
let login = prompt("Who's there?");

if (login == "Admin") {
  let password = prompt("Enter password");
  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password == "" || password == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (login == "" || login == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

// Repeat until the input is correct
while (true) {
  let number = prompt("Enter a number greater than 100");

  if (number > 100 || number == "" || number == null) {
    break;
  }
}
