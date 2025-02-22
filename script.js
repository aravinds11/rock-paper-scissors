let computerChoice = "";
let humanChoice = "";

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
}


function printScore(humanScore, computerScore) {
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log();
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        humanChoice = "rock";
        playRound();
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        humanChoice = "paper";
        playRound();
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        humanChoice = "scissors";
        playRound();
    });

    function playRound() {
        getComputerChoice();

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

        if(humanScore == 5 || computerScore == 5) {
            console.log("\nFinal score: ")
            printScore(humanScore, computerScore);
            
            if(humanScore == 5)
                console.log("Human wins!\n");
            else if(computerScore == 5)
                console.log("Computer wins!\n");
            else
                console.log("Error\n");

            computerScore = 0;
            humanScore = 0;
        }
    }
}

playGame();




