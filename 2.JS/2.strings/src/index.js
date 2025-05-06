import chalk from 'chalk'

let myName = "" //empty string
let myBook = "Introduction to Javascript"
let statement = `I love to code`
let laptopType = 'Lenovo'


// String [properties 
//1: length - returns the number of characters in a string  
let name = 'Alice'
console.log(name.length) //5

//charAt() - returns the character at the specified index in a string  
//s h a k i r a
//0 1 2 3 4 5 6
let fname = 'shakira'
console.log(fname.charAt(3)) //k 

// concat - concatinates or joins two strings 
let firstname = 'Julia'
let secondname = 'Mwangi'
console.log(firstname.concat(secondname))
console.log(firstname.concat(' ' + secondname)) //es5 - adding space
console.log(firstname.concat(' ' + "Malik")) //es5
console.log(firstname.concat(`${secondname}`)) //es6
console.log(firstname.concat(` ${secondname}`)) //es6
console.log(firstname.concat(` Malik`)) //es6


//IndexOf - returns the index of the first occurance of a specified value in a string 
// I am a student 
// 0123456789.....
const lname = "Ann Kipkoech Keio "
console.log(lname.indexOf("K")) //4

//includes - returns true if a string contains a specified value 
console.log(lname.includes("Keio")) //true
console.log(lname.includes("keio")) //false


///toLowerCase - it converst a string to lowercase letters 
console.log("ELEPHANT".toLowerCase()) //elephant
let animalName = "Elephant"
console.log(animalName.toLowerCase()) //elephant


///toUpperCase - it converst a string to upppercase letters 
console.log("elephant".toUpperCase()) //ELEPHANT
console.log(animalName.toUpperCase()) //ELEPHANT

//split  - splits a string object into an array of strings by separat=ting the strings into sub arrays
console.log("wendani".split()) //[ 'wendani' ]
console.log("wendani".split(" ")) //[ 'wendani' ]
console.log("wendani".split("")) //(7) ['w', 'e', 'n', 'd', 'a', 'n', 'i']


//substring - extracts characters from a string between two specified indices 
//substring(startingIndex, endingIndex-1)
let sentence = "I am a student"
console.log(sentence.substring(7,11)) //stud - from 7 end at 11-1(10)

//substr - Extracts parst of a string
//beginning at the character of the specified position 
//and returns the specified numbers of character
//substr(startingIndex, numberOfCharacters)
console.log(sentence.substr(7, 4)) // from 7 index, return 4 characters

let sentence1 = "Hellowz my name is Juma"
console.log(sentence1.substr(2,5)) //llowz

// Original string with spaces
let sent = '       Hi I am available           ';

// Log the original string with yellow highlighting
console.log(chalk.yellow(`Original: [${sent}]`));

// Trim spaces from both ends
console.log(chalk.green(`Trimmed: [${sent.trim()}]`));

// Trim only from the start
console.log(chalk.blue(`Trim Start: [${sent.trimStart()}]`));

// Trim only from the end and highlight the added "yellow"
console.log(chalk.red(`Trim End: [${sent.trimEnd()}]`) + chalk.yellow(" yellow"));
