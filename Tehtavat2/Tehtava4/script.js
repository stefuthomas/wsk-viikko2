'use strict';

function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sorted = sortArray(numbers);

console.log("Original array");
numbers.forEach(num => console.log(num));
console.log("Sorted array");
sorted.forEach(num => console.log(num));