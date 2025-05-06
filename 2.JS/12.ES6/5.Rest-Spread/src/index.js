function names(...args){
  //...args are an indifinite argumets passed as an array
}

function say(a, b,c,d, ...chars){
  //...chars is an array holding all the remianing arguments
  //after the first four argments
}

//we can use a function to return sum of only arguments passed as a number and ignore the non-number
function sum(...args) {
  //return args //[ 1, 'Pamela', 'hello', 90, undefined, null ]
  //return args.filter((elem) => (typeof elem === 'number')) //[ 1, 90 ]
  //reduce the array into asingle val - reduce
  return args.filter((elem) => typeof elem === 'number') //[ 1, 90 ]
             .reduce((prev, next) => prev + next)  //91
}
let result = sum(1, "Pamela", "hello", 90, undefined, null);
console.log(result)








//spread 
//... dots passed to an array means create a copy of that array 
//The spread operator can be used to create a shallow copy of an array:
// copy arrays
const arr1 = ['a', 3, { name: 'Alamin', age: 54 }]
const arr2 = [1, { isMale: true }]

const combinedArray = [...arr1,...arr2]
console.log(combinedArray)
//[ 'a', 3, { name: 'Alamin', age: 54 }, 1, { isMale: true } ]

//how can we add new elements to the combined arrays
const info = [...combinedArray, "45", {uni: 'DEKUT', isStudent: true}]
console.log(info)
// ['a',3,{ name: 'Alamin', age: 54 },1,{ isMale: true },'45',
//   { uni: 'DEKUT', isStudent: true }
// ]


// JavaScript objects must have unique keys. If you try to merge two objects with the same key, the later object will overwrite the earlier one for that key.
const objStd1 = {
  username: "Joseph",
  age: 23,
};
const objStd2 = {
  username: "Paul",
};

const objStd3 = { ...objStd1, ...objStd2 };
console.log(objStd3); // Output: { username: 'Paul', age: 23 }


// Handling Multiple Values for a Key﻿
// If you want to store multiple values for a key, an array is a useful solution:
 let arr = new Array()
 console.log(arr instanceof Array) //true
var obj = {
  key: ["value1", "value2"],
  username: 'AliDev'
}
for(let i in obj) {
  console.log(i)//key
   if(obj[i] instanceof Array){
    for(let k = 0; k < obj[i].length; k++){
      console.log(obj[i][k]) //outputs value1, value2
    }
   } else {
    console.log('As else have executed',obj[i])
   }
}

// 1. Arrays: Indexed Storage (Duplicate Allowed)
// In arrays, elements are stored in an ordered list, indexed by position (0, 1, 2, ...). When spreading (...info1, ...info2), JavaScript appends elements sequentially without checking for duplicates.
const info1 = [1,2, 'Cynthi']
const info2 = [1,2, 'Cynthi']
const infoCombined = [...info1, ...info2]
console.log(infoCombined) //[ 1, 2, 'Cynthi', 1, 2, 'Cynthi' ]
// ✔ Why does it keep duplicates?

// Spreading (...info1, ...info2) does not replace existing values, it just appends them.
// Arrays do not enforce uniqueness (unlike Sets).


// 2. Objects: Key-Based Storage (Overwrites on Duplicate Keys)
// Objects store data as key-value pairs, and keys must be unique. When spreading ({...obj1, ...obj2}), duplicate keys get overwritten by the last value.
const obj1 = { name: "Cynthi", age: 25 };
const obj2 = { age: 30, city: "Nairobi" };
const objCombined = { ...obj1, ...obj2 };

console.log(objCombined); 
// { name: 'Cynthi', age: 30, city: 'Nairobi' }
