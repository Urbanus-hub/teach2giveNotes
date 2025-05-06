// how to declare a variable
let name = ""
var students = [];
const marks = {};


// naming convections 
//1: use cameLCase
let isLoggedIn = true

//2:Start with a letter, underscore, or dollar sign.
//const #dollars = 234 // this will lead into an error
let $dollars = 234
let _dollars = 234
let dollars = 234
let $dollarsInUsa = 700

//be descriptive - dont be verbose , be concise 
let myMumIsAGoodChefWhoCooksWell = "" // this is too verbose 
let mumsDish = "" // this is concise 

// Avoid names like these
let x = "John";
let y = new Date();
let z = true;


//Types of data structures for variables names  
//numbers, strings, booleans, nulls, undefined, objects, arrays, BigInts

//Numbers - integers, doubles, Big ints, 
console.log("I  am an integer", 4)
console.log("I  am an double", 4.23)
console.log(typeof 45)
//Big ints are for number greater than 2 power 53-1
//add an n after the big number
const elonsWealth = 150000000000000000000000n


//Strings - texts inside quotes '' or  ""
console.log('my name is Ali')
console.log('45')
console.log(typeof '45')

///Booleans - true or false  
const isAuthenticated = true
const isAdmin = false

// isAuthenticated ? <ShowProfile/> : <ShowAuthPage />

//undefined  - have not defined the variable 
let student;
console.log(student)


//data is empty, returns null - Nullable 
const noData = { number: null }
console.log(noData.number)


//object 
// {} - empty object 
let myData= {}
console.log(myData)
//to add data to object you use . notation 
myData.name = "Alamin Juma"
myData.university = "Sultan Qaboos"
console.log(myData)
console.log("myData is an ", typeof myData)


//Arrays 
// []
let isMarriend = false
const info = ["Pauline Wangui", 22, "DEKUT", {IdNumber: 3456453, nationality: "Kenyan"}, isMarriend]
console.log(info)
console.log("info is an ", typeof info)

//type coacion 
// Type coercion
//string concatinated to a number it becomes a string
console.log(typeof ("5" + 3)); // "53" (string concatenation)
console.log( "5" + 3); // "53" (string concatenation)


console.log( (5 + "3")); // "53" (string concatenation)
console.log(typeof (5 + "3")); // "53" (string concatenation)


console.log("5" - 3); // 2 (numeric subtraction)


//change string to number
console.log( Number('56'))
console.log(typeof Number('56'))

console.log(parseInt('56'))
console.log(typeof parseInt('56'))

//number to string
let  num = 56
console.log(num.toString())
console.log(typeof  num.toString())

