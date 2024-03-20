'use strict';

const numbers = [];

for(let i = 1; i <= 5; i++) {
    const num = parseInt(prompt("Enter " + i + ". number"));
    numbers.push(num);
}

console.log("Numbers:");
numbers.forEach(num => console.log(num));

const userInput = parseInt(prompt("Enter an integer to check if it is included in the array."));
if (numbers.includes(userInput)) {
    alert(userInput + " is in the array.");
} 
else {
    alert(userInput + " is not in the array.");
}

numbers.pop();
console.log("Numbers after using .pop():");
numbers.forEach(num => console.log(num));

numbers.sort((a, b) => a - b);
console.log("Numbers sorted:");
numbers.forEach(num => console.log(num));
