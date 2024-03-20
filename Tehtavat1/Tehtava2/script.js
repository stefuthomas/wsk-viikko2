'use strict';


function calculateDistance() {
    const x1 = parseInt(prompt("Input the x1-coordinate"));
    const x2 = parseInt(prompt("Input the x2-coordinate"));
    const y1 = parseInt(prompt("Input the y1-coordinate"));
    const y2 = parseInt(prompt("Input the y2-coordinate"));
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function main() {
    const distance = calculateDistance();
    const p = document.createElement("p");
    p.innerText = "The distance between the points is " + distance;
    document.body.appendChild(p);
}

main();