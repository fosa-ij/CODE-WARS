/* Rock Paper Scissors!

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
rockpaperscissors

 */

// SOLUTION
const rps = (p1, p2) => {
    if (p1 == 'rock' && p2 == 'scissors' || p1 == 'scissors' && p2 == 'paper' || p1 == 'paper' && p2 == 'rock'){
        return 'Player 1 won!'
    } else if (p2 == 'rock' && p1 == 'scissors' || p2 == 'scissors' && p1 == 'paper' || p2 == 'paper' && p1 == 'rock'){
        return 'Player 2 won!'
    } else {
        return 'Draw!'
    }
};
console.log(rps('paper', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'rock'));