//EXERCISE LEVEL ONE
//
let string= '30 Days of JavaScript'; //declare challenge variable 
let challenge = string; //set the string to 30 Days of JavaScript
console.log(string); //print the string out
console.log(string.length); //print the length of the string 
console.log(string.toUpperCase); //prints and changes the string to UpperCase
console.log(string.toLowerCase); //prints and changes the string to LowerCase
console.log(string.substring(3,21)); //cut out the 30 and leave Days of JavaScript
console.log(string.substring(0,3)); //slice out the Days of JavaScript 
console.log(string.includes('Script')); //check to see if the string includes 'Script'
console.log(string.split()); // split the string into an array 
console.log(string.split(' ')); //split the string with space
let brands =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(brands.split(',')); //split to any array at comma 
console.log(string.replace('JavaScript','Python')); //swap out JavaScript with Python 
console.log(string.charAt(15)); //what is the character at index 15 
console.log(string.charCodeAt('J')); //gets the charCodeAt of 72 for J 
console.log(string.indexOf('a')); //tells the position of the first instant of 'a'
console.log(string.lastIndexOf('a')); //tells the position of the last instant of 'a'
let word = 'You cannot end a sentence with because because because is a conjunction';
console.log(word.indexOf('because')); // find the position of the first instant of the word because 
console.log(word.lastIndexOf('because'));//find the position of the last instant of the word because
console.log(word.search('because')); //using the search function to find the position of the first instant of the word because 
console.log(string.trim()); // removes all white space from the beginning and the end of the string
console.log(string.startsWith('30'));  //make statment = to true 30 is the start of the string 
console.log(string.endsWith('t')); //checks to see if t is what the string ends with if so its true if not false 
console.log(string.endsWith("3")); //example of the statement being false 
let pattern = /a/gi; //targets the letter a 
console.log(string.match(pattern));  //display all instantces of the letter 
let title = '30';
console.log(title.concat("Days","of","JavaScript")); // join all strings togther 
console.log(string.repeat(2)); //repeats the string twice 
//
//EXERCISE LEVEL TWO 
let quoteOne = '"There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.'
console.log(quoteOne);
