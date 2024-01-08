// name of function
function getComputerChoice() {
    // start of function, set randomnum to random value between 1 and 0
    let randomnum = Math.random()
    // if less than 1/3, log rock
    if (randomnum < 1/3) {
        console.log("rock");
    }

    else if (randomnum > 2/3) {
        console.log("paper");
    }

    else {
        console.log("scissors");
    }
}

console.log(getComputerChoice)