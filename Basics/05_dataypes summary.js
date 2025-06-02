

// primitive data types
// non premitive data types




// why categorize data types? to store data efficiently and access it quickly



// premitive data types (call by value)

/*  1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol // used to create unique identifiers
7. BigInt // used to represent integers with arbitrary precision

*/


// reference data types (call by reference) non primitive data types

/* 
1. array
2. object  // master object to master javascript and browser events
3. function // functions are objects in javascript



*/





const score = 100; // number

// javascript is dynamically typed, so we can change the type of a variable at runtime

// typescript is statically typed, so we need to define the type of a variable at compile time


const isActive = true; // boolean

const outsidetest = null

let useremail ; // undefined 


const id = Symbol('id'); // symbol
const anotherId = Symbol('123'); // 


console.log(id === anotherId); // false, symbols are unique 








const bigNumber = BigInt(1234567890123456789012345678901234567890); // BigInt
const anotherBigNumber = BigInt("1234567890123456789012345678901234567890"); // BigInt
console.log(bigNumber === anotherBigNumber); // true, both are the same BigInt value 


const heros = ['Thor', 'Ironman', 'Hulk']; // array

// objects 
 /* 
 
 let myObject = {   
    name: 'John',
    age: 30,
    isActive: true,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'gaming']



 
 */


const myfunction = function() {


    console.log('This is a function');
}
    

console.log(typeof myfunction); // function, functions are objects in javascript
console.log(typeof heros); // object, arrays are also objects in javascript
console.log(typeof myObject); // object, objects are objects in javascript
console.log(typeof score); // number
console.log(typeof bigNumber); 



// typeof 

/*
type of val  result 

undefined -- undefined
null -- object (this is a bug in javascript, null is not an object)
boolean -- boolean
number -- number
string -- string
object -- object (this is for arrays, functions, and objects)
function -- function



// non premitive are mostly objects // fuctions are also called 




*/





/* summary     


Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/ 



// stack ( premitive ) , heap ( non premitive ) memory allocation in javascript

let myYoutubename = 'harsh'; // string

let anotherYoutubename = myYoutubename; // copy by value
anotherYoutubename = 'harsh Hindi'; // changing the value of anotherYoutubename does not change myYoutubename


console.log(myYoutubename); // harsh
console.log(anotherYoutubename);  // harsh Hindi




let user = {
    email: "user@gmail.com" ,

    upi : "user@upi" 
}



let userTwo = userOne

userTwo.email = " hi@gmail.com "


console.log(user.email); //
console.log(userTwo.email); //