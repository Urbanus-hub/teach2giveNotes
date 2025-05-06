//we can do basic with JS 
let num1 = 20
let num2 = 23

//addition 
console.log(num1+num2) //43
//subtraction
console.log(num1-num2) //-3
//multiplication 
console.log(num1*num2) //460
//division
console.log(num1/num2) //0.8695...
//power
//4power2 = 16
console.log(4**2) //16


//increment and decrement operators 
//++ - adds one to the value
//-- - remove one from the value 

//post increment 
let salary = 90000
console.log(salary++) //90000
console.log(salary) //90001

//pre increment 
let salary1 = 90000
console.log(++salary1) //90001
console.log(salary1) //90001

const marks = [56, 45,67,87] 
// for(let index = 0; index < marks.length; index++ ){
//     console.log(`${marks.indexOf(marks[index])}: ${marks[index]}`)
//     if(index === marks.indexOf(marks[index])){
//         console.log(true)
//     } else {
//         console.log(`I have stopped`)
//     }
// }
for(let index = 0; index < marks.length; ++index){
    console.log(`${marks.indexOf(marks[index])}: ${marks[index]}`)
    if(index === marks.indexOf(marks[index])){
        console.log(true)
    } else {
        console.log(`I have stopped`)
    }
}


//pre decrement  
let num3 = 9
console.log(--num3) //8

//post decrement  
let num4 = 9
console.log(num4--) //9
console.log(num4) //8


//greater than or less than 
console.log(10 < 11) //true
console.log(10<=11) //true
console.log(10>11) //false
console.log(11>=10) //true


//Math Objects 
console.log(typeof Math) //object
//Math is an object in javascript 
//Ratio of a circle's circumference to its diameter; approximately 
// 3.14159.

let radius = 7
console.log(Math.PI * radius**2 )//153.93804002589985
console.log(Math.sqrt(16)) //4
let numbers = [1,2,3,4,5,6,7]
console.log('Maximum number is: ', Math.max(...numbers)) //7
console.log('Minimum number is: ', Math.min(...numbers)) //1

//Math.random - Returns a pseudo-random number between 0 and 1.
const invoiceNumber = Math.random() *10000000
console.log(`BSNRTY${Math.floor(invoiceNumber)}`) //BSNRTY4905775
//we want to remove the invoice number decimals 

//Returns the largest integer less than or equal to the input.
console.log(Math.floor(4.5)) //4
console.log(Math.floor(4.9)) //4

//Returns the smallest integer greater than or equal to the input.
console.log(Math.ceil(4.5)) //5
console.log(Math.ceil(4.9)) //5
console.log(Math.ceil(4.1)) //5

//The Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(4.4)) //4
console.log(Math.round(4.5)) //5

import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4()) //0dd9e2cf-8f43-4e9f-9dd5-7410f1e2e436;
