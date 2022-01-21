'use strict';

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('.message-box');
const userChoice = document.querySelector('.player');
const computerChoice = document.querySelector('.computer');
const play = document.querySelector('.play');
const restart = document.querySelector('.restart');

const rps = ["ROCK", "PAPER", "SCISSORS"];

let user, cpu;
let hasChosen = false;

choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        let choiceId = Number(choice.id) - 1;
        user = rps[choiceId];
        AddPlayerToBox(choiceId, 'user');
        hasChosen = true;
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
    ComputerSelection();
});

const ComputerSelection = function() {
    const randChoice = Math.floor(Math.random() * 3);
    cpu = rps[randChoice];
    AddPlayerToBox(randChoice, 'cpu');
}
