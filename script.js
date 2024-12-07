let computerChoice;
let humanChoice;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    if(randomNumber >= 0 && randomNumber <= 33) {
        computerChoice = "rock";
    }
    else if(randomNumber >= 34 && randomNumber <= 66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
}

function getHumanChoice() {
    humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    alert(humanChoice);
}

getComputerChoice();
getHumanChoice();