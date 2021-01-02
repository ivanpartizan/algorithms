// Network
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  movieTime() {
    if (this.data - this.users * 5 >= 10) {
      return true;
    } else {
      return false;
    }
  }
}

const library = new Network(50, 9);
library.movieTime();

// Player
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Ballons Left: ${this.balloonCount}`);
  }
}

const balloonAttack = (player1, player2) => {
  let player1BallonsLeft = player1.balloonCount - player2.hitsPerMinute * 10;
  let player2BallonsLeft = player2.balloonCount - player1.hitsPerMinute * 10;

  console.log(player1BallonsLeft);
  console.log(player2BallonsLeft);

  if (player1BallonsLeft > player2BallonsLeft) {
    return `Winner is ${player1.name}`;
  } else if (player1BallonsLeft < player2BallonsLeft) {
    return `Winner is ${player2.name}`;
  } else {
    return `Tie game!`;
  }
};

const p1 = new Player("Ivan", 5);
const p2 = new Player("Milan", 2);

balloonAttack(p1, p2);

// Codecademy solution
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`);
  }
}

const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++) {
    player2.balloonCount -= player1.hitsPerMinute;
    player1.balloonCount -= player2.hitsPerMinute;
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  } else if (player2.balloonCount > player1.balloonCount) return player2.name;

  return "Tie";
};

// Cipher
class ShiftCipher {
  constructor(shiftValue) {
    this.shiftValue = shiftValue;
  }
  encrypt(textString) {
    let returnedString = "";
    let char;
    for (let i = 0; i < textString.length; i++) {
      let uniCode = textString.toUpperCase().charCodeAt(i);
      if (uniCode >= 65 && uniCode <= 90) {
        uniCode += this.shiftValue;
        if (uniCode > 90) {
          uniCode -= 26;
        }
        char = String.fromCharCode(uniCode);
      } else {
        char = String.fromCharCode(uniCode);
      }
      returnedString += char;
    }
    return returnedString;
  }
  decrypt(encryptedMessage) {
    let returnedMessage = "";
    let char;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let uniCode = encryptedMessage.toLowerCase().charCodeAt(i);
      if (uniCode >= 97 && uniCode <= 122) {
        uniCode -= this.shiftValue;
        if (uniCode < 97) {
          uniCode += 26;
        }
        char = String.fromCharCode(uniCode);
      } else {
        char = String.fromCharCode(uniCode);
      }
      returnedMessage += char;
    }
    return returnedMessage;
  }
}

const cipher = new ShiftCipher(2);
cipher.encrypt("I love to code!"); // returns 'K NQXG VQ EQFG!'
cipher.decrypt("K <3 OA RWRRA"); // returns 'i <3 my puppy'
