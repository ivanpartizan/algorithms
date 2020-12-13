const team = {
  _players: [
    {
      firstName: "Michael",
      lastName: "Jordan",
      age: 31,
    },
    {
      firstName: "Kobe",
      lastName: "Bryant",
      age: 21,
    },
    {
      firstName: "Isaiah",
      lastName: "Thomas",
      age: 25,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 40,
      opponentPoints: 25,
    },
    {
      opponent: "Packers",
      teamPoints: 28,
      opponentPoints: 21,
    },
    {
      opponent: "Seahawks",
      teamPoints: 35,
      opponentPoints: 42,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponentName,
      teamPoints,
      opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Patriots", 21, 18);
console.log(team.games);
