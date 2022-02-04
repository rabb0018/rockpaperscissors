let winner = "";

function start() {
    console.log("start");
    getUserSelection();
}

function getUserSelection() {

    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    
    showAnimation();
}



function showAnimation() {

    determineWinner();
}

function determineWinner() {

    // faked so users always win
    winner = "computer";

    // if player wins, dont need to use this if it you can code it. 

    showWin();
}

function showWin() {
console.log("Show win!");
// show winner
}


function showLose() {
    
}

function showDraw() {

}