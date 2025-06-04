const score = 400 
const balance =  new Number(1000)

console.log(score)
console.log(balance)



console.log(balance.toString().length) // 4

console.log(balance.toFixed(2)) // 1000.00
console.log(balance.toFixed(2).length) // 7


const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)) // 23.9


const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000  // US locale
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 // Indian locale


// ++++++++++++++++++++ MathS  ++++++++++++++++++++




// console.log(Math) // object

// console.log(Math.abs(-4));

// console.log(Math.round(4.6)); // 5

// console.log((Math.ceil(4.1))); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1







console.log(Math.random()); // random number between 0 and 1 

console.log((Math.random() * 10) + 1 ); 
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 10 
const max = 20


Math.random() * (max - min + 1) + min; // random number between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random integer between 10 and 20







