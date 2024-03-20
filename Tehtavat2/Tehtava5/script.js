'use strict';

function sortArray(numbers, order) {
    if (order === "asc") {
        return numbers.slice().sort((a, b) => a - b);
    }
    if (order === "desc") {
        return numbers.slice().sort((a, b) => b - a);
    }
}

const numbers = [5, 2, 7, 6, 1, 3, 9, 8, 4, 10];
const ascending = sortArray(numbers, "asc");
const descending = sortArray(numbers, "desc");

console.log("Original array");
numbers.forEach(num => console.log(num));

console.log("Ascending array");
ascending.forEach(num => console.log(num));

console.log("Descending array")
ascending.forEach(num => console.log(num));