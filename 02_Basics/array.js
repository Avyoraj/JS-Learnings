// // array 


// const myArr = [1, 2, 3, 4, 5];

// console.log(myArr); // [1, 2, 3, 4, 5]



// // another way 


// const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2); // [1, 2, 3, 4, 5]


// console.log(myArr2[0]); // 1, first element of the array


 

// // methods 

// myArr2.push(6); // adds 6 to the end of the array
// myArr2.push(7); // adds 7 to the end of the array
// myArr2.pop(); // removes the last element (7) from the array
// console.log(myArr2); // [1, 2, 3, 4, 5, 6]


// myArr2.unshift(0); // adds 0 to the beginning of the array

// console.log(myArr2); // [0, 1, 2, 3, 4, 5, 6]

// myArr2.shift(); // removes the first element (0) from the array

// console.log(myArr2); // [1, 2, 3, 4, 5, 6]








// console.log(myArr2.includes(3)); // true, checks if 3 is in the array
// console.log(myArr2.includes(8)); // false, checks if 8 is in the array




// console.log(myArr2.indexOf(3)); // 2, returns the index of 3 in the array
// console.log(myArr2.indexOf(8)); // -1, returns -1 if 8 is not in the array



// const newArr = myArr.join()
// console.log(myArr); 


// console.log(newArr); // "1,2,3,4,5", joins the array elements into a string with commas



// slice splice

const Array = [0,1, 2, 3, 4, 5];


console.log("A", Array);

const myn1= Array.slice(1, 3); // returns a new array with elements from index 1 to 2 (not including index 3)

console.log(myn1);
console.log("B", Array); // original array remains unchanged



const myn2 = Array.splice(1, 3); // removes elements from index 1 to 3 (not including index 4) and returns them
console.log("C " , Array ); 
console.log(myn2); 



// splice manipulates the original array, removing elements and returning them
// slice creates a new array without modifying the original array



