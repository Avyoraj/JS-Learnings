// dates


let myDate = new Date();
console.log(myDate); // current date and time


console.log(myDate.toString()); // current date and time in string format


console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // object, Date is an object in JavaScript


let createdDate = new Date("01-14-2023"); // Date object for January 14, 2023


// let anotherDate = new Date("01-14-2025");

// console.log(createdDate.toDateString()); // Date object for January 23, 2023


// console.log(createdDate.toLocaleString());



// console.log(anotherDate.toDateString()); // Date object for January 14, 2025
// console.log(anotherDate.toLocaleString());  





let myTimeStap = Date.now(); // current timestamp in milliseconds since January 1, 1970

// console.log(myTimeStap); // prints the current timestamp in milliseconds 


// console.log(createdDate.getTime()); // prints the timestamp for the createdDate object 


console.log(Math.floor(Date.now() / 1000)); // prints the current timestamp in seconds since January 1, 1970



let newDate= new Date() 



console.log(newDate.getMonth()); // 0-11, January is 0, December is 11

console.log(newDate.getDate()); // 1-31, 1 is the first day of the month, 31 is the last day of the month



new Date().toLocaleString('default', { 
    month: 'long' 
}); // January, February, ..., December


