'use strict';

function getNumber() {
    const number = parseInt(prompt('Input a number'));
    if (isNaN(number)) {
        alert('Not a number');
        return getNumber();
    } else if (number < 0) {
        alert('Number is negative');
        return getNumber();
    } else {
        return number;
    }
}

function generateMultiplicationTable(number) {
    const table = document.createElement("table");
    for (let i = 1; i <= number; i++) {
        const row = table.insertRow();
        for (let j = 1; j <= number; j++) {
            const cell = row.insertCell();
            cell.innerText = i * j;
        }
    }
    document.body.appendChild(table);
}

function main() {
    const number = getNumber();
    generateMultiplicationTable(number);
}

main();