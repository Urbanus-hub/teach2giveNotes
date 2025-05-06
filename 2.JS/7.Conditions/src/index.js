//conditions are basically an if statement that evaluates to true 
//basic if statement
let showering = true
if(showering) {
  console.log('You are a good boy 👍👍👍')
}


//if the condition was not satisfied - there is a fallback with an else statement 
let heShowered = false
if(heShowered){
  console.log('You are a good boy 👍👍❌❌')
} else {
  console.log('You are a bad boy ✅✅')
}


//in some situations, you can have multiple fallbacks
//eles-if  , else if,else if, else if, else if, ........ else
let grade = ''

function myGrade(mark) {
  if(mark > 89){
    grade = 'A'
  } else if(mark > 70) {
    grade = 'B'
  } else if(mark > 50) {
    grade = 'C'
  } else if(mark > 30){
    grade = 'D'
  } else {
    grade = 'E'
  }
  return grade
}
console.log(`Your grade is : ${myGrade(78)}`)

//Later we will learn ES6 syntax for conditions 
// let functionName = condition ? executedThis1: (else) executedThis2
const myGrade1 = (mark) => {
  return mark>=100 && mark ? 'A' : //this is the else if 
         mark >=70 ? 'B' : //this is the else if 
         mark >=50 ? 'C' ://this is the else if 
         mark >=30 ? 'D' : //this is the else if 
         'Invalid input marks' //this is the else block 
}
console.log(myGrade1(100)) //invalid input marks
console.log(myGrade1(64)) //invalid input marks 