// The Game class is responsible for keeping score and controlling the flow of the overall game

class Game {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.guessesLeft = 0;
  }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  };
}

module.exports = Game;
