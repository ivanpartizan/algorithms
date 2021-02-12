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
