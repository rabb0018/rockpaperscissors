"use strict";

let playerUser;
let computer;

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
document.querySelectorAll("#buttons button").forEach((elm) => {
    elm.addEventListener("click", userChose);
});


document.querySelector("#player1").addEventListener("animationend", handAniEnd);
    
}

function userChose() {
    reset();
    if (this.classList.contains("rock")) {
        console.log("klik", "ROCK");
        playerUser = "rock";
    } else if (this.classList.contains("paper")) {
        console.log("klik", "PAPER");
        playerUser = "paper";
    } else {
        console.log("klik", "SCISSORS");
        playerUser = "scissors";
    }

    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    const computerArray = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    computer = computerArray[randomNum];
    
    showAnimation();
}



function showAnimation() {
document.querySelector("#player1").classList.add("shake");
document.querySelector("#player2").classList.add("shake");



    
}

function handAniEnd() {
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    if (playerUser === "rock") {
        document.querySelector("#player1").classList.add("rock"); 
    } else if (playerUser === "paper") {
        document.querySelector("#player1").classList.add("paper");
    } else {
        document.querySelector("#player1").classList.add("scissors");
    }


    if (computer === "rock") {
        document.querySelector("#player2").classList.add("rock"); 
    } else if (computer === "paper") {
        document.querySelector("#player2").classList.add("paper");
    } else {
        document.querySelector("#player2").classList.add("scissors");
    }
    determineWinner();
}


function determineWinner() {
    console.log("*****");
    console.log("player", playerUser);
    console.log("computer", computer);

    let winner;
    if (playerUser === "rock") {
        if (computer === "rock") {
            console.log("Tied");
            winner = "none";
        } else if (computer === "paper") {
            console.log("Winner is Computer");
            winner = "computer";
        } else {
        console.log("Winner is Player");
        winner ="player";
        }

    } else if (playerUser === "paper") {
        if (computer === "rock") {
            console.log("Winner is Player");
            winner = "player";
        } else if (computer === "paper") {
            console.log("Tied");
            winner = "none";
        } else {
            console.log("Winner is Computer");
            winner = "computer";
        }
     
    } else (playerUser === "scissors") ;{
        if (computer === "rock") {
            console.log("Winner is Computer");
            winner = "computer";
        } else if (computer === "paper") {
            console.log("Winner is player");
            winner = "player";
        } else {
            console.log("Tied");
            winner ="none";
        }
    } 

    if (winner === "player") {
        showWin();
    } else if (winner === "computer") {
        showLose();
    } else {
        showDraw();
    }
}


function showWin() {
console.log("Show win!");
document.querySelector("#win").classList.remove("hidden");
}


function showLose() {
    document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
    document.querySelector("#draw").classList.remove("hidden");
    
}

function reset() {
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");

    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");

    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

}