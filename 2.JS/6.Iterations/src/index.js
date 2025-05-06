//loops in Javascript are done using 4 loops 
//while loop
//do...while loop
//for loop
//for ...of loop
//for...in loop

//the while loop 
//while the condition is true, execute the code  

// while(condition){
//     //put the code inside here
// }

let x = 0
while(x < 10) {
    console.log(x)
    x++
}
console.log("The program has been stopped"); // Executes after x is no longer less than 10


//do...while, guarantees the execution of code before it is tested 
// do{
//     //do this
// } while(condition)

// let actualPassword = "pa$$w0rd";
// let myInputPassword;
// do {
//   let passwordInputValue = prompt("Enter a password");
//   myInputPassword = passwordInputValue;
// } while (myInputPassword !== actualPassword);
// alert("Correct password");
//the user will be prompted to enter password as long as this password doesnt match the actual password


//for loop
// for (initialization; condition; increment) {
//     // code to be executed
//   }
  
  const marks = [12, 34, 45, 56, 78, 79];
  console.log('The length of the array is ', marks.length);
  
  for (let index = 0; index < marks.length; index++) {
    console.log(`${marks[index]}\n`); // Outputs all values in the marks array
    if (index >= 5) {
      console.log('The program will break if index is greater or equal to 5\n');
      break; // Exits the loop if index is 5 or more
    }
  }


  // for ... of 
// The for...of loop is used to iterate over iterable
//  objects such as arrays, strings, and other built-in iterable objects. 
/**
 * 
 for (variable of iterable) {
  // code to be executed
}
 */
const languages = ["JavaScript", "Python", "HTML"];
for(let lang of languages){
    console.log(`${lang}\n`)
}

// for..in - The for...in loop is used to iterate over the enumerable properties of an object
/**
 *for (variable in object) {
  // code to be executed
}
 */

const myInfo = {
    name: 'Alamin',
    age: 45,
    bankBalance: "12 bob", 
    //function
    info: () => {
        const info = {
            idNumber: 222333444,
            country: "Kenya"
        }
        return `IdNumber: ${info.idNumber}  country: ${info.country}`
    }
}

for (const key in myInfo) {
   console.log(`${key}: ${myInfo[key]}`)
}