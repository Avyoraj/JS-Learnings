let score = "hitesh"

//console.log(typeof score); 
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33 easy
// "33abc" => NaN not a number
//  true => 1; false => 0

// "hitesh" => NaN


// let score = NULL // null => 0
// undefined => NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber);  // string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power operator
// console.log(2/3); 
// console.log(2%3);


// tricky stuff 

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // hello hitesh  

// console.log("1" + 2);    // 12 
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // // 32   

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // 1
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion