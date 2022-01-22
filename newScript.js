'use strict';

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('.message-box');
const userChoice = document.querySelector('.player');
const computerChoice = document.querySelector('.computer');
const play = document.querySelector('.play');
const restart = document.querySelector('.restart');
const playAgain = document.querySelector('.play-again');
const userScoreText = document.querySelector('.user-score');
const cpuScoreText = document.querySelector('.cpu-score');

const rps = ["ROCK", "PAPER", "SCISSORS"];

let user, cpu;
let userWin = 0;
let cpuWin = 0;
let hasChosen = false;
let hasPlayed = false;

choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        if (hasPlayed === false) {
            let choiceId = Number(choice.id) - 1;
            user = rps[choiceId];
            AddPlayerToBox(choiceId, 'user');
            hasChosen = true;
        }
    });
});

const AddPlayerToBox = function(selection, player) {
    if (hasChosen === false) {
        setAttr();
    }
    else if (hasChosen === true) {
        document.querySelector('.chosen').remove();
        setAttr();
    }

    function setAttr() {
        const chosen = document.createElement('img');
        chosen.setAttribute('src', `images/${selection + 1}.svg`);
        chosen.setAttribute('class', 'chosen');
        if (player === 'user') userChoice.append(chosen);
        else if (player === 'cpu') computerChoice.append(chosen);
    }
}

play.addEventListener('click', () => {
    if (hasChosen === true) {
        hasPlayed = true;
        hasChosen = false;
        ComputerSelection();
        ComparePlayers();
    }
    else if (hasChosen === false) {
        hasPlayed = false;
        document.querySelectorAll('.chosen').forEach(e => e.remove());
        play.textContent = 'Play';
        message.textContent = 'Who ya got?';
    }
});

const ComputerSelection = function() {
    const randChoice = Math.floor(Math.random() * 3);
    cpu = rps[randChoice];
    AddPlayerToBox(randChoice, 'cpu');
}

const ComparePlayers = function() {
    if (user == cpu) {
        message.textContent = "Uh oh! Looks like you choose both!";
        play.textContent = 'Next';
    }
    else if (user == "ROCK" && cpu == "PAPER") {
        ProcessCPUWin();
    }
    else if (user == "PAPER" && cpu == "SCISSORS") {
        ProcessCPUWin();
    }
    else if (user == "SCISSORS" && cpu == "ROCK") {
        ProcessCPUWin();
    }
    else if (user == "ROCK" && cpu == "SCISSORS") {
        ProcessUserWin();
    }
    else if (user == "PAPER" && cpu == "ROCK") {
        ProcessUserWin();
    }
    else if (user == "SCISSORS" && cpu == "PAPER") {
        ProcessUserWin();
    }
    else {
        message.textContent = "You may have inputted something wrong?";
    }

    function ProcessCPUWin() {
        cpuWin++;
        cpuScoreText.textContent = cpuWin;
        message.textContent = `You Lose! ${cpu} beats ${user}!`;
        play.textContent = 'Next';
    }

    function ProcessUserWin() {
        userWin++;
        userScoreText.textContent = userWin;
        message.textContent = `You Win! ${user} beats ${cpu}!`;
        play.textContent = 'Next';
    }

    if (userWin == 5 || cpuWin == 5) GameWin();
}

const GameWin = function() {
    if (userWin > cpuWin) {
        message.textContent = `You win the game! ${userWin}-${cpuWin}`;
    } 
    else if (cpuWin > userWin) {
        message.textContent = `You just lost to the cpu! ${userWin}-${cpuWin}`;
    }

    ToggleButtons();
}


restart.addEventListener('click', () => {
    RestartGame();
});

playAgain.addEventListener('click', () => {
    RestartGame();
});

const RestartGame = function() {
    document.querySelectorAll('.chosen').forEach(e => e.remove());
    ToggleButtons();
    play.textContent = 'Play';
    message.textContent = 'Who ya got?';
    userWin = 0;
    cpuWin = 0;
    cpuScoreText.textContent = cpuWin;
    userScoreText.textContent = userWin;
    hasChosen = false;
    hasPlayed = false;
}

const ToggleButtons = function() {
    play.classList.toggle('hidden');
    restart.classList.toggle('hidden');
    playAgain.classList.toggle('hidden');
}



