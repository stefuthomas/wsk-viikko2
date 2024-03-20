'use strict';

function getGrade(userInput) {
    if (userInput >= 88 && userInput <= 100) {
        return "Your grade is 5";
    } else if (userInput >= 76 && userInput <= 87) {
        return "Your grade is 4";
    } else if (userInput >= 64 && userInput <= 75) {
        return "Your grade is 3";
    } else if (userInput >= 52 && userInput <= 63) {
        return "Your grade is 2";
    } else if (userInput >= 40 && userInput <= 51) {
        return "Your grade is 1";
    } else if (userInput >= 0 && userInput <= 39) {
        return "Your grade is 0";
    } else {
        return "check the input"
    }
}


function main() {
    const userInput = parseInt(prompt("Input the score"));
    const grade = getGrade(userInput);
    const p = document.createElement("p");
    p.innerText = grade
    document.body.appendChild(p);
}

main()