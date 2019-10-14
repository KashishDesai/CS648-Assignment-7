
function display_menu() {
    "use strict";
    window.alert("Welcome to the game of rock, paper or scissors. User need to choose between 3 options: Rock, Paper, Or Scissors");
}

function outcome(selection, choice) {
    "use strict";
    if(selection == choice){
        return "The result is a tie! The selection of computer was: " + selection;
    } 
    if (choice === "rock"){
        if (selection === "paper") {
            return "You loose... Paper covers rock! The selection of computer was: " + selection;
        } else if (selection == "scissor") {
            return "You win... Rock destroys scissors! The selection of computer was: " + selection;
        }
    } else if (choice === "paper") {
        if (selection === "rock") {
            return "You win... Paper covers rock! The selection of computer was: " + selection;
        } else if (selection == "scissor") {
            return "You loose... Scissors cut paper! The selection of computer was: " + selection;
        }
    } else if (choice === "scissor") {
        if (selection === "paper") {
            return "You win... Scissor cut paper! The selection of computer was: " + selection;
        } else if (selection == "rock") {
            return "You loose... Rock destroys scissors! The selection of computer was: " + selection;
        }
    } else{
        return "Invalid Input. Enter the correct option.";
    }
}

function main() {
    "use strict";
    display_menu();
    var number = Math.ceil(Math.random() * 3);
    window.console.log(number);
    var choice = window.prompt("choose you option: Rock Paper Scissor");
    var selection;
    choice = choice.toLowerCase();
    if(number === 1){
        selection = "rock";
    } else if (number === 2) {
        selection = "paper";
    } else if (number === 3) {
        selection = "scissor";
    }

    var result = outcome(selection, choice);
    window.alert(result);
}

main();