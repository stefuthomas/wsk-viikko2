"use strict";

const numbers = [];
let input;
while (input !== "done") {
  input = prompt("Enter a number (or 'done' to finish):");
  if (input !== "done") {
    parseInt(input);
    numbers.push(input);
  }
}
const ul = document.createElement("ul");
for (const num of numbers) {
  if (num % 2 === 0) {
    const li = document.createElement("li");
    const node = document.createTextNode(num);
    li.appendChild(node);
    ul.appendChild(li);
  }
}
document.body.appendChild(ul);
alert("Program stopped");