//traditional function 
function double(n) {
  return n *  n 
}
console.log(double(7)) //49

//Arrow functions 
// const functionName = () => {return } //pass in a return keyword 
// const functionName = () => () //return immedietly

const doubleArrowFn = (n) => {
  return n *  n 
}

const arrowRetunImmedietFn = (n) => (
   n *  n 
)
const arrrowRetunImmedietFn1 = (n) => n * n;



//parameters in functions 
//Single Parameter (No Parentheses Needed):
const square  = n => n * n 
console.log(square(4)) //16

//on multiple parameters, u must put them inside ()
const add = (a,b) => a + b
console.log(add(5, 10)); // Output: 15

// No Parameters (Empty Parentheses Required):﻿
const greet = () => "Hello!";
console.log(greet()); // Output: Hello!


///the this keyword in arrow functions 
//traditional functions handle this keyword different from the arrow funtions
let myVar = 0
function myFunction(myVar) {
  this.myVar = 2
  setTimeout(function()  {
    this.myVar++
    console.log(this.myVar) //NaN
  }, 0)
}
console.log(myFunction(5)) //undefined 


//arrow function with this keyword
class Counter {
  constructor() {
    this.count  = 0
  }

  increment() {
    setTimeout(() => {
      this.count++
      console.log(this.count) //3
    }, 1000)
  }
}

const counter = new Counter()
counter.increment() //1
