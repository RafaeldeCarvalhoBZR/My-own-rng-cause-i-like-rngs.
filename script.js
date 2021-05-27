let n = parseInt(prompt("How many numbers are to be generated?")); 
let x = parseInt(prompt("Min range value?"));
let y = parseInt(prompt("Max range Value?"));
let ar = [];
for (let index = 0; index < n; index++) {
    function rng(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min );
    }
    ar.push(rng(x, y));
}
console.log(ar);


// this
// lines 
// only
// exist
// in 
// order
// to
// make
// github
// consider
// this
// a
// JavaScript
// -
// predominant
// code.
