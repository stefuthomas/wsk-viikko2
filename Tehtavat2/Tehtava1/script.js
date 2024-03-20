'use strict';

const fruits = ["apple", "banana", "orange", "grape", "kiwi "];
console.log("Fruits:");
fruits.forEach(fruit => console.log(fruit));
console.log("Size of the array: " + fruits.length);
console.log("Element at index 2: " + fruits[2]);
console.log("Last element of fruits: " + fruits[fruits.length - 1]);

const vegetables = []
for (let i = 1; i <= 3; i++) {
    const vegetable = prompt("Input the " + i + ". vegetable");
    vegetables.push(vegetable);
}
console.log("Vegetables:");
vegetables.forEach(vegetable => console.log(vegetable));
console.log("Size of the array: " + vegetables.length);