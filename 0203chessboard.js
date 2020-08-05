let size = 8;
let chessboard = "";
let space = " ";
let hash = "#";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      chessboard += space;
    }
    if ((i + j) % 2 == 1) {
      chessboard += hash;
    }
  }
  chessboard += "\n";
}
console.log(chessboard);
