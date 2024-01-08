// name of function
function getComputerChoice() {
    // start of function, set randomnum to random value between 1 and 0
    let randomnum = Math.random()
    // if less than 1/3, log rock
    if (randomnum < 1/3) {
        return ("rock");
    }

    else if (randomnum > 2/3) {
        return ("paper");
    }

    else {
        return ("scissors");
    }
}

// if tie gameon()
// so, I have the value of computerchoice, I know what the computer will choose
// so I need to import that value into gameOn first, and then 
// rock paper scissors define them

const losemsg = "you lost! unlucky!"
const winmsg = "you win! well done!"


function gameOn(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = prompt("select rock, paper, or scissors");
    if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return winmsg
    }

    console.log()

}