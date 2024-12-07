let computerChoice;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    if(randomNumber >= 0 && randomNumber <= 33) {
        computerChoice = "Rock";
    }
    else if(randomNumber >= 34 && randomNumber <= 66) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
}

getComputerChoice();