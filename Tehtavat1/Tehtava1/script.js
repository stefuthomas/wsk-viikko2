'use strict';

function getCelcius() {
    const celcius = parseFloat(prompt("Input temperature in celcius"));
    return celcius;
}

function toFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

function main() {
    const celcius = getCelcius();
    const fahrenheit = toFahrenheit(celcius);
    const p = document.createElement("p");
    p.innerText = celcius + " Celcius is " + fahrenheit + " in Fahrenheit."
    document.body.appendChild(p);
}

main();