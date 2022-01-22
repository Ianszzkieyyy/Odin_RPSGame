'use strict';

// DISCLAIMER: THIS IS THE SCRIPT FILE USED FOR THE CONSOLE ONLY VERSION, AND IS NOT USED IN THE UI VERSION ANYMORE. DESPITE
// THIS, SOME OF THE CODE HERE HAS BEEN INTEGRATED TO WORK WITH THE NEW SCRIPT WHICH IS USED IN THE UI VERSION.

// Used to keep track of game score
let userWin = 0;    
let compWin = 0;

// Ask the user for the player of his/her choosing (wrong input will get error)
const userSelection = function() {
    const userPlayer = prompt("Rock, Paper, Scissors! Who You Got?");
    return userPlayer.toUpperCase();
}

// computer will select randomly between the three 
const computerSelection = function() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randChoice = Math.floor(Math.random() * 3);       // Math.random chooses a number from 0 to 1. times that to 3 to make it
    return choices[randChoice];                             // 0 to 2 (+1 would make it 1 to 3) and floor will round the number off                                                      
}                                                           // and use that number to get element in the array.     


// check every scenario possible in rock paper scissor game
const playround = function() {
    let userPlayer = userSelection();
    let computerPlayer = computerSelection();

    if (userPlayer == computerPlayer) {
        return "Uh oh! Looks like you choose both!";
    }
    else if (userPlayer == "ROCK" && computerPlayer == "PAPER") {
        compWin++;
        return "You Lose! Paper beats Rock!";
    }
    else if (userPlayer == "PAPER" && computerPlayer == "SCISSORS") {
        compWin++;
        return "You Lose! Scissors beats Paper!";
    }
    else if (userPlayer == "SCISSORS" && computerPlayer == "ROCK") {
        compWin++;
        return "You Lose! Rock beats Scissors!";
    }
    else if (userPlayer == "ROCK" && computerPlayer == "SCISSORS") {
        userWin++;
        return "You Win! Rock beats Scissors!";
    }
    else if (userPlayer == "PAPER" && computerPlayer == "ROCK") {
        userWin++;
        return "You Win! Paper beats Rock!";
    }
    else if (userPlayer == "SCISSORS" && computerPlayer == "PAPER") {
        userWin++;
        return "You Win! Scissors beats Paper!";
    }
    else {
        return "You may have inputted something wrong?";
    }
}

// make the game a best of 5 by tracking the score
const game = function() {
    while(userWin < 5 && compWin < 5) {
        console.log(userWin, compWin);
        console.log(playround());
    }

    if (userWin > compWin) console.log("You beat that A.I in a best of five. Well done!");
    else if (compWin > userWin) console.log("The A.I got the best of ya. Well it looks like they taking over.");
}

game();



