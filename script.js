'use strict';


let userSelection = prompt("Rock, Paper, Scissors! Who You Got?");
userSelection = userSelection.toUpperCase(); // We use this to make user selection case insensitive

// Randomly pick between rock paper or scissors

const computerSelect = function() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randChoice = Math.floor(Math.random() * 3);
    return choices[randChoice];
}

const computerSelection = computerSelect();

// check every scenario possible in rock paper scissor game

const playround = function(userSelection, computerSelection) {
    if (userSelection == computerSelection) {
        console.log("Uh oh! Looks like we have a tie!");
    }
    else if (userSelection == "ROCK" && computerSelection == "PAPER") {
        console.log("You Lose! Paper beats Rock!");
    }
    else if (userSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log("You Lose! Scissors beats Paper!");
    }
    else if (userSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log("You Lose! Rock beats Scissors!");
    }
    else if (userSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You Win! Rock beats Scissors!");
    }
    else if (userSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You Win! Paper beats Rock!");
    }
    else if (userSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You Win! Scissors beats Paper!");
    }
    else {
        console.log("You may have inputted something wrong?")
    }
}

playround(userSelection, computerSelection);


