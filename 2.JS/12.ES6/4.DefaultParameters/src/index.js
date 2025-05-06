//in es6, it possible to assign default values in the function declarations
function say(message = 'hi') {
  console.log(message)
}
say() //hi
say("Hello")
//a default parameter is a fallback if a prameter was not provided 

//single parameter with default fu ctions 
function sum(numA, numB = 5) {
  console.log(numA + numB)
}
sum(10)  //15
sum(5, 15) //20

//providing a parameter value will override the default parameter

//Multiple Parameters with Default Values﻿
function greet(greeting = 'Hello', name = 'World') {
  console.log(`${greeting}, ${name}!`);
}
greet() //Hello, World!
greet('Hi'); // Output: Hi, World!
greet('Hi', 'Dan'); // Output: Hi, Dan!

//Arrow Functions with Default Parameters﻿
const sayHi = (greet = 'Hi', message = 'Val') => {
  console.log(`${greet} ${message}`)
}
sayHi() //Hi Val
sayHi('Hello') //Hello Val