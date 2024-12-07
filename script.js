let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

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
    //console.log(computerChoice);
}

function getHumanChoice() {
    humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    //console.log(humanChoice);
}

function printScore() {
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playRound() {
    if(humanChoice == "rock" && computerChoice == "rock") {
        alert("Tie");
    }
    else if(humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        alert("Rock loses to paper");
        printScore();
    }
    else if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        alert("Rock beats scissors");
        printScore();
    }
    else if(humanChoice == "paper" && computerChoice == "paper") {
        alert("Tie");
    }
    else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        alert("Paper beats rock");
        printScore();
    }
    else if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        alert("Paper loses to scissors");
        printScore();
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors") {
        alert("Tie");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock") {
        humanScore += 1;
        alert("Scissors lose to rock");
        printScore();
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        computerScore += 1;
        alert("Scissors beat paper");
        printScore();
    }
    else {
        alert("Enter valid input!");
    }
}

getComputerChoice();
getHumanChoice();
playRound();