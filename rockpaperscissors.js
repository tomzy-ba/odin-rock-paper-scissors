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
const winmsg = "you win! well done!";
const losemsg = "you lost! unlucky!";
const drawmsg = "it's a draw!";

let playerScore = 0;

let documentPlayerScore = document.querySelector("#playerscore");

let computerScore = 0;
let documentComputerScore = document.querySelector("#computerscore");

const button1 = document.querySelector("#gamebutton1");
const button2 = document.querySelector("#gamebutton2");
const button3 = document.querySelector("#gamebutton3");

button1.addEventListener("click", gameOn)
button2.addEventListener("click", gameOn)
button3.addEventListener("click", gameOn)


function gameOn() {
    let playerSelection = this.innerText;
    let computerSelection = getComputerChoice();


    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection  == "scissors" && computerSelection == "paper")  {
        playerScore ++;
        console.log(winmsg)  
    }

    else if (playerSelection == computerSelection) {
        console.log(drawmsg) 
    }

    else {
        computerScore ++;
        console.log(losemsg)
    }

    documentPlayerScore.textContent = playerScore;
    documentComputerScore.textContent = computerScore;

    if (playerScore == 5) { 
        alert("You Win!");
        playerScore = 0; computerScore = 0;
    }
    else if (computerScore == 5) {
        alert("You Lose!")
        playerScore = 0; computerScore = 0;
    }
}