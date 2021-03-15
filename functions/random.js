// generate two random numbers between 1 and 6 for dice throw among any given number of players.
// it also tells us the winner

let scores = [];
const numberOfPlayers = 5;

function castDice() {
  for (player = 1; player <= numberOfPlayers; player++) {
    const firstDie = Math.floor(Math.random() * 6) + 1;
    const secondDie = Math.floor(Math.random() * 6) + 1;
    const total = firstDie + secondDie;
    if (total == 12) {
      return "Double Six: Throw again";
    }
    scores.push(total);
    console.log(`palyer${player} has a total of ${total}`);
  }
  return scores;
}

castDice();
console.log(scores);

const winner = Math.max(...scores);
const winnerIndex = scores.indexOf(winner);

const winnerAnnouncement = `player${
  winnerIndex + 1
} is the winner with a score of ${winner}`;
console.log(winnerAnnouncement);
