const name = 'Alamin' //single string value
const number = 56 //single number value
const countryInfo = {name: 'Kenya', county: 'Mombasa'} // a single object value
const info = [name, number, countryInfo] //a collection of different value 
console.log(info)
// [ 'Alamin', 56, { name: 'Kenya', county: 'Mombasa' } ]


//accessing array indices 
mark = [13, 45, 56, 78, 90];
//       0    1   2   3   4 .....
//       -5   -4   -3     -2   -1  reverse index


//access modifiers in array
//arrayName[indexPosition]
console.log(mark[0]) //13

//if we try to reassign the const value it will result into an error
// const fname = 'Ali'
// fname = 'Green'
const fullname = ['Ali', 'Green']
fullname[0] = 'Olam'
console.log(fullname[0])
// Passed by Reference: Arrays in JavaScript are passed by reference, not by value. This means that when you assign an array to a new variable, both variables point to the same array in memory. Changes to one variable will affect the other.

//modifications in array 
//arrayName[index] = newValue
const marks = [23,45,67,89]
//lets change the marks at index 2 to 56 
let marksAtIndex2 = marks[2] //67
marksAtIndex2 = 53
console.log(marksAtIndex2) //53

//.push is a mrthod used to add elements to the end of the array
const dennisInfo = []
dennisInfo.push(23)
console.log(`Dennis Info`, dennisInfo) //Dennis Info [ 23 ]
dennisInfo.push({idNumber: 234567, country: 'Kenya'})
console.log(`Dennis info`,dennisInfo)
// Dennis info [ 23, { idNumber: 234567, country: 'Kenya' } ]

//.pop is a method used to remove the last element 
console.log(dennisInfo.pop()) 
//{ idNumber: 234567, country: 'Kenya' }       

//shift() - used to remove the first element 
console.log(dennisInfo.shift()) //23


//indexOf() - used to get the position of a particular value in aarray 
const cowInfo = ['Fresian', 'Brown', 150]
// an indexOf() expects you to pass in a value, 
//an empty indexOf you get a flag -1
console.log(cowInfo.indexOf()) // -1 - unavailable
console.log(cowInfo.indexOf("Fresian")) //0
console.log(cowInfo.indexOf(150)) //2


//how do you join arrays 
//concat  - used to combine two arrays
// firstArrayName.concat(secondArray)
const markMwangi = ['Mark', 23456]
const stanley = ['Stanley', 567890]
const combinedArrays = markMwangi.concat(stanley)
console.log(combinedArrays)
//[ 'Mark', 23456, 'Stanley', 567890 ]


//joining array eleme ts into one string use join()
const months = ['Jan', 'Feb', 'March', 'April']
//join array elements with optional separators
console.log(months.join()) //Jan,Feb,March,April

//adding unspaced '' on the join 
//it will remove the , commas
console.log(months.join(''))//JanFebMarchApril

//adding spaced '' on the join
//will add space between the elements
console.log(months.join(' ')) //Jan Feb March April

//.reverse() - used to reverse the array elements 
console.log(['C', 'o', 'w'].reverse()) //[ 'w', 'o', 'C' ]


//you can use this trick to find a palindrom 
console.log('dad' === 'dad'.split('').reverse().join(''))

//Use splice() to remove, replace, or add elements in an array.
//arrayName.splice(indexPosition, numberOfItems, 'Value')
const siz = ['Felistus', 'Nelly', 'Perl'];
//at index 1 replace zero value
//this means add Fatma at index 1 and push Nelly
// siz.splice(1, 0, 'Fatma');
// console.log(siz); 
// Outputs: [ 'Felistus', 'Fatma', 'Nelly', 'Perl' ]

//at index 1, replace that value with this new value
// siz.splice(1, 1, 'Joy')
// console.log(siz)
// //[ 'Felistus', 'Joy', 'Nelly', 'Perl' ]       

// //at index 1, remove 2 items and replace them with this  Najma and Jane
// siz.splice(1, 2, 'Najma', 'Jane');
// console.log(siz);
 // Outputs: [ 'Felistus', 'Najma', 'Jane', ]

// //this means remove the first item automatically 
 console.log(siz.splice(1));
  // Outputs: [ 'Nelly', 'Perl' ]


  //slice - Use slice() to create a shallow copy of a portion of an array
  // slice will return an array from the starting index to the indexProvided minus one (1, 4) => index1 to index3
  const broz = ['Mark', 'Alan', 'Ian', 'Stano'];
console.log(broz.slice(1,3)) //index1 - index2
//[ 'Alan', 'Ian' ]

//Use includes() to check if an array contains a specific value.
console.log(broz.includes('DJ shiti')) //fasle
console.log(broz.includes('Mark')) //true