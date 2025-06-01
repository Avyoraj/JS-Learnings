// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true
// console.log("02" > 1);  // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0);  // true




/*   the reason is that an equaltiy check == and comparisoin s <> = <= work differently 

comparison operators convert null to a number, treating it as 0, so null >= 0 is true.

thats why null >=0 is true but null >0 is false 
equality check == does not convert null to a number, so null == 0 is false

*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false 



// === means strict equality check, it checks both value and type

// === 

console.log("2" === 2);  // false, because string and number are different types
console.log("2" == 2);   // true, because value is same