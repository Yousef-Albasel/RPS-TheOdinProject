let computerSelection; // Move this outside the computerChoice function so it's accessible globally
let selectedOpt;
let selectedOption;
let score = 0;
function computerChoice() {
    let options = ["rock", "paper", "scissors"];
    selectedOpt = options[Math.floor(Math.random() * options.length)];
    document.getElementById("placeholder-two").setAttribute("id", `${selectedOpt}`)
    return selectedOpt;
}

let playerSelection;

function playerChoice(event) {
    selectedOption = event.target.id;
    const gameContainer = document.querySelector(".game");
    const resultContainer = document.querySelector(".result");

    gameContainer.style.display = 'none';
    resultContainer.style.display = 'flex';

    computerSelection = computerChoice();

    playerSelection = selectedOption;
    document.getElementById("placeholder").setAttribute("id", `${selectedOption}`)
    processResult();
}


function processResult() {
    let result;
    if (playerSelection.toLowerCase() === computerSelection) {
        result = "Draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = "You win!";
        score += 1;

    } else {
        result = "You lose!";
    }
    document.querySelector(".result-text").innerHTML = result;
    document.getElementById("score-text").innerHTML = score;
    localStorage.setItem('highscore', score);
    console.log(playerSelection)
    console.log(computerSelection)

}

function playAgain() {

    const gameContainer = document.querySelector(".game");
    const resultContainer = document.querySelector(".result");
    gameContainer.style.display = 'flex';
    resultContainer.style.display = 'none';

    document.querySelector(`.opt-res#${selectedOption}`).setAttribute("id", "placeholder");
    document.querySelector(`.opt-res#${selectedOpt}`).setAttribute("id", "placeholder-two");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    const savedScore = localStorage.getItem('highscore');

    score = savedScore ? parseInt(savedScore, 10) : 0;
    document.querySelector(".opt#paper").addEventListener("click", playerChoice);
    document.querySelector(".opt#rock").addEventListener("click", playerChoice);
    document.querySelector(".opt#scissors").addEventListener("click", playerChoice);
    document.getElementById("replay-button").addEventListener("click", playAgain);
    document.getElementById("score-text").innerHTML = score;

});


