'use strict';

const userInput = parseInt(prompt("Enter a positive integer"));
const p = document.createElement("p");

if (userInput < 0) {
    p.innerText = "Not a positive number";
} else if (userInput == 0) {
    p.innerText = "entered number is 0";
} else {
    let sum = 0;
    for (let i = 1; i <= userInput; i++) {
        sum += i;
    }
    p.innerText = "Sum of numbers from 1 to " + userInput + " is " + sum;
}

document.body.appendChild(p);