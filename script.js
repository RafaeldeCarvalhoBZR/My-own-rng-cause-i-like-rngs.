let x = parseInt(prompt("Min range value?"));
let y = parseInt(prompt("Max range Value?"));

function rng(min, max) {
     return Math.floor(Math.random() * (max + 1 - min) + min );
}
console.log(rng(x, y));