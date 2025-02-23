let computerChoice = "";
let humanChoice = "";

let computerScore = 0;
let humanScore = 0;

const humanScoreElement = document.getElementById("human-score");
const computerScoreElement = document.getElementById("computer-score");
const roundResultElement = document.getElementById("round-result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
}

function updateScore() {
    humanScoreElement.textContent = "Your score: " + humanScore;
    computerScoreElement.textContent = "Computer score: " + computerScore;
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    updateScore();
    roundResultElement.textContent = ""; 
    enableButtons();
}

function playGame() {
    rock.addEventListener("click", () => {
        humanChoice = "rock";
        playRound();
    });

    paper.addEventListener("click", () => {
        humanChoice = "paper";
        playRound();
    });

    scissors.addEventListener("click", () => {
        humanChoice = "scissors";
        playRound();
    });

    function playRound() {
        getComputerChoice();

        let roundMessage = ""; 

        if(humanChoice == "rock" && computerChoice == "rock") {
            roundMessage = "Tie";
        }
        else if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            roundMessage = "Rock loses to paper";
        }
        else if(humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            roundMessage = "Rock beats scissors";
        }
        else if(humanChoice == "paper" && computerChoice == "paper") {
            roundMessage = "Tie";
        }
        else if(humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            roundMessage = "Paper beats rock";
        }
        else if(humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            roundMessage = "Paper loses to scissors";
        }
        else if(humanChoice == "scissors" && computerChoice == "scissors") {
            roundMessage = "Tie";
        }
        else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            roundMessage = "Scissors lose to rock";
        }
        else if(humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            roundMessage = "Scissors beat paper";
        }

        roundResultElement.textContent = roundMessage; 
        updateScore();

        if(humanScore == 5 || computerScore == 5) {
            console.log("\nFinal score: ");
            updateScore();

            if(humanScore == 5) {
                roundResultElement.textContent = "You win!\n"; 
            } else if(computerScore == 5) {
                roundResultElement.textContent = "You lose!\n"; 
            }

            disableButtons();
        }
    }
}

playGame();
