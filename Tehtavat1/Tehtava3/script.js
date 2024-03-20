'use strict';

function getSide(i) {
    const side = parseInt(prompt("Input the " + i + ". side"));
    return side;
}

function getType(firstSide, secondSide, thirdSide) {
    if (firstSide === secondSide && secondSide === thirdSide) {
        return "equilateral";
    } else if (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

function main() {
    const firstSide = getSide(1);
    const secondSide = getSide(2);
    const thirdSide = getSide(3);
    const type = getType(firstSide, secondSide, thirdSide);
    const p = document.createElement("p");
    p.innerText = type;
    document.body.appendChild(p);
}

main();