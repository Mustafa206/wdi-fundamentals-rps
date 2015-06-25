////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
/////////////////playe///////////////////////////////

function getPlayerMove(move) {

   return move = move || getInput();
 }
getPlayerMove(move);

function getComputerMove(move) {
move = randomPlay();
 return move = move || getComputerMove();
 }
 
 getComputerMove(move);

 function getWinner(playerMove,computerMove) {
 var winner;

}

function getWinner(playerMove,computerMove) {
    var winner;

    return winner;
}
 if (playerMove === "rock" && computerMove === "scissors") {
 console.log("Player wins!");
 }
 else if (playerMove == "scissors" && computerMove == "rock") {
 
 console.log("Computer wins!");
 }
 else if (playerMove == "rock" && computerMove == "paper") {
 
 console.log("Computer wins!");
 }
 else if (playerMove == "paper" && computerMove == "rock") {
 
 console.log("Player wins!");
 }
 else if (playerMove == "paper" && computerMove == "scissors") {
 
 console.log("Computer wins!");
 }
 else if (playerMove == "scissors" && computerMove == "paper") {
 
 console.log("Player wins!");
 }
 else {
 
 console.log("Tie!");
 }

 if (playerMove == "rock" && computerMove == "scissors") {
 
 console.log("Player wins!");
 }
 else if (playerMove == "scissors" && computerMove == "rock") {
 
 console.log("Computer wins!");
 }
 else if (playerMove == "rock" && computerMove == "paper") {
 
 console.log("Computer wins!");
 }
 else if (playerMove == "paper" && computerMove == "rock") {
 
 console.log("Player wins!");
 }
 else if (playerMove == "paper" && computerMove == "scissors") {
 
 console.log("Computer wins!");
 }
 else if (playerMove == "scissors" && computerMove == "paper") {
 
 console.log("Player wins!");
 }
 else {
 console.log("Tie!");
 }

 return winner;
 

 getWinner(playerMove,computerMove);
 
 function playToFive() {
 console.log("Let's play Rock, Paper, Scissors");
 var playerWins = 0;
 var computerWins = 0;


 return [playerWins, computerWins];
}
 console.log('Let\'s play Rock Paper Scissors');
 var playerWins = 0;
 var computerWins = 0;
 
 
 while (playerWins < 5 && computerWins < 5){
 getWinner(getPlayerMove(), getComputerMove());
 if (winner === "player") {
 playerWins += 1;
 console.log("Player" + playerWins + " " + "Computer" + computerWins);
 }
 else if (winner === "computer") {
 computerWins += 1;
 console.log("Player" + playerWins + " " + "Computer" + computerWins);
 }
 else {
 playerWins && computerWins;
 console.log("Player" + playerWins + " " + "Computer" + computerWins);
 }
 }
 return [playerWins, computerWins];
 
 
playToFive(); 
