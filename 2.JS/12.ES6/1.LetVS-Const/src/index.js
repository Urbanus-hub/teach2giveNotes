//let and const are ES6 features that offer block-scoping  
// block-scoping is a way to cotrol variables scoped better than var

// let﻿
// Block-Scoped: Variables declared with let are limited to the block (enclosed by {}) in which they are defined. This prevents variables from leaking out of their intended scope.
// Reassignable: Variables declared with let can be reassigned new values.

//let is blocked scope and x could npt be accessed outside its block 
// function example() {
//   if(true) {
//     let x = 10
//     console.log(x) //10
//   }
//   console.log(x) //ReferenceError: x is not defined
// }
// example()

//const is blocked scope and x could npt be accessed outside its block 
// function example() {
//   if(true) {
//     const x = 10
//     console.log(x) //10
//   }
//   console.log(x) ////ReferenceError: x is not defined
// }
// example()


//var is not blocked scope and x could  be accessed outside its block 
// function example() {
//   if(true) {
//     var x = 10
//     console.log(x) //10
//   }
//   console.log(x) //10
// }
// example()


///example 2 
 const z = 10 //gobal scope
 if(z === 10) {
  const z = 20 //blocked scope - inside  {}
  console.log(z) //20
 }
 console.log(z) //10



//  var (for Comparison)﻿
// Function-Scoped: Variables declared with var are scoped to the function in which they are defined, or global if defined outside any function.
// Hoisting: var declarations are hoisted to the top of their scope, but the initialization stays in place.

var y = 10; // Global scope

if (y === 10) {
    var y = 20; // Function or global scope (not block scoped)
    console.log(y); // 20
}

console.log(`The value at y is now: ${y}`); // 20


//the var keyword o a function scope  {} will always affect the global scope variable


// Scope in Functions﻿
// Variables declared with let and const are block-scoped, while var is function-scoped.
// var length = 12; // Global variable

// function area() {
//     return length * length; // Uses global length
// }

// console.log(area()); // 144


//let and const  
let length = 12; // Global variable

function area() {
  let length = 14
    return length * length; // Uses global length
}

console.log(area()); // 196