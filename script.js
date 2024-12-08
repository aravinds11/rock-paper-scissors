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
}

function getHumanChoice() {
    humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
}

function printScore(humanScore, computerScore) {
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log();
}



function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound() {
        getComputerChoice();
        getHumanChoice();

        if(humanChoice == "rock" && computerChoice == "rock") {
            console.log("Tie");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            console.log("Rock loses to paper");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("Rock beats scissors");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "paper" && computerChoice == "paper") {
            console.log("Tie");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("Paper beats rock");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            console.log("Paper loses to scissors");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Tie");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            console.log("Scissors lose to rock");
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            console.log("Scissors beat paper");
            printScore(humanScore, computerScore);
        }
        else {
            alert("Enter valid input!");
        }
    }
    for(let i = 1; i <= 5; i++) {
        playRound();
    }
    console.log("\nFinal score: ")
    printScore(humanScore, computerScore);

}

playGame();