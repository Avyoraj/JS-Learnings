const name = 'John'; // string

const repoCount = 42; // number

console.log(name + repoCount + " Value"); // John // outdated way of concatenating strings



// backticks are used for template literals

// sting interpolation

console.log(`${name} has ${repoCount} repositories`); // John has 42 repositories

const gameName = new String( 'hviz'); // object, not a primitive string" 

console.log ( gameName[0])
// h, this is because gameName is an object, not a primitive string


console.log(gameName.__proto__); // String.prototype, this is the prototype of the String object



console.log(gameName.length); // 3, this is the length of the string object
console.log(gameName.toUpperCase()); // HVIZ, this is the uppercase of the string object
console.log(gameName.toLowerCase()); // hviz, this is the lowercase of the string object
console.log(gameName.charAt(0)); // h, this is the first character of the string object
console.log(gameName.indexOf('v')); // 1, this is the index of the character 'v' in the string object



// orignal value of the string is not changed cuz of stack ( string is a primitive type in javascript )



const newString = gameName.substring(0, 2); // hv, this is the substring of the string object from index 0 to index 2

console.log(newString); // hv, this is the substring of the string object from index 0 to index 2

const anotherString = gameName.slice(-8 , 3);  
console.log(anotherString);  



const NewStringone = "            hello world         "

console.log(NewStringone.trim()); // "hello world", this removes the whitespace from the beginning and end of the string





const url = "https://www.youtube.com/@hitesh%20choudhary";

url.replace("%20", "-"); // "https://www.youtube.com/@hitesh-choudhary", this replaces the first occurrence of "%20" with "-"



console.log(url.includes("youtube")) ; // true, this checks if the string contains "youtube"

console.log(gameName.split("-")); 




// jitna strings padhoge utna aacha hoga kaam aayega strings ka