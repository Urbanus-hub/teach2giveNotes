//the code is working but its leading to unreadable code
//this leads to a callback hell pyramid 
//t solve this problem of callsback, we will use promises 

// A Promise can be in one of three states:

// Pending: Initial state, neither fulfilled nor rejected.

// Fulfilled: The operation was completed successfully.

// Rejected: The operation failed.

//syntax 
new Promise((resolve, reject) => { })  //pending state 

let promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (false) { //change it to true/false
    resolve('Success message'); // Resolve with a success message
  } else {
    reject('Error message'); // Reject with an error message
  }
});
console.log(promise) //Promise { 'Success message' }

// Consuming a Promise is done using the .then() and .catch() methods, which allow you to define how to handle success and failure, respectively
promise.then((result) => { //.then used to resolve
  console.log(result) //Success message
}).catch((error) => {
  console.error(error) //Error message
})

//if the promise is false it will reject 
// Promise { <rejected> 'Error message' }
// Error message




// a callback is a function that is passed into another function as an argument and is executed after some operation or event completes

// They are commonly used to handle tasks such as reading files, making network requests, or processing data.


// it eneables asynchronous processes by returing the results back to the main
// function after operation end

function addCallback(z, callbackfn) {
  return callbackfn(z, 6)
}

function add(a, b) {
  return a + b
}
console.log(addCallback(10, add)) //16

//map , reduce and filter are all callback funtions passed inside oter function
// map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
const arr = [1, 2, 3, 4, 5, 6]
const double = arr.map((num) => (num * 2))
console.log(double)//[ 2, 4, 6, 8, 10, 12 ]

// The .map() method takes a callback function that doubles each number in the array.
// The callback function (num) => num * 2 is applied to each element of the array.

//lets demo a netflix example
//to get details of a certain video 
//1: login to netflix
//2: get all the vieos
//3: get one video from all the videos  
//4: get the details of that video 


//login to netflix
//in th place of callback function we will return a new Promise 
// function loginUser(email, password, callbackfn) {
//   setTimeout(() => {
//     console.log(`We are logging into Netflix`)
//     callbackfn({ userEmail: email, userPassword: password })
//   }, 3000)
// }

function loginUser(email, password) {
  //return a new promise instead of a callback function 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`We are logging into Netflix`)
      // replace callbackfn with reslove
      resolve({ userEmail: email, userPassword: password })
      console.log(email)
    }, 3000)
  })
}

//get all videos 
function getAllVideos({ userEmail }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`We have all the recently watched videos`)
      const videosInfo =  ["Star wars", "The Mando", "The Lord of the rings"] 
      resolve( { userEmail, videosInfo})
      console.log(videosInfo)
    }, 3000)
  })

}

//get details of one video 
function getVideoInfo(videosInfoObj) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`We have the details of one vifeo`)
      resolve({ video: videosInfoObj.videosInfo[1] }) //The Mando
      console.log(videosInfoObj.videosInfo[1])
    }, 3000)
  })

}


//lets chain the promises
loginUser("jay@duff.com", "1234rhgivshcbjk").then((userObj) => getAllVideos(userObj) ).then((videosObj) => getVideoInfo(videosObj) )

