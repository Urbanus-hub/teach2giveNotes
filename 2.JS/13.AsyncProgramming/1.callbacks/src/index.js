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
function loginUser(email, password, callbackfn) {
  setTimeout(() => {
    console.log(`We are logging into Netflix`)
    callbackfn({ userEmail: email, userPassword: password })
  }, 3000)
}

//get all videos 
function getAllVideos({ userEmail }, callbackfn) {
  //we need the email and password to get all videos from the callbackfn in loginUser
  setTimeout(() => {
    console.log(`We have all the recently watched videos`)
    callbackfn({ userEmail, videosInfo: ["Star wars", "The Mando", "The Lord of the rings"] })
  }, 3000)
}

//get details of one video 
function getVideoInfo(videosInfoObj, callbackfn) {
  //videos info is coming from get all videos which was passed inside callbackfn from getAllVideos
  setTimeout(() => {
    console.log(`We have the details of one vifeo`)
    callbackfn({ video: videosInfoObj.videosInfo[1] }) //The Mando
  }, 3000)
}


//lets execute the sequence of all asynchronous operatiosn 
loginUser("jay@duff.com", "1234rhgivshcbjk", (userObj) => {
  console.log(userObj.userEmail) //jay@duff.com
  //   We are logging into Netflix
  // { userEmail: 'jay@duff.com', userPassword: '1234rhgivshcbjk' }

  //this is a ssingle thread and we need to tap into it and get the value to be passed by the callback functions 
  getAllVideos(userObj, (videosDetailsObj) => {
    console.log(videosDetailsObj)
    // {
    //   userEmail: 'jay@duff.com',
    //   videosInfo: [ 'Star wars', 'The Mando', 'The Lord of the rings' ]
    // }

    //get details of mando 
    getVideoInfo(videosDetailsObj, (video) => {
      console.log(video)
      //       We have the details of one vifeo
      // { video: 'The Mando' }

      //we can go ahead and get the timestamp of Mando 
      //we will add another callback function

    })
  })

  //to get details of mando we need to be inside the thread of getAllVideos

})

//the code is working but its leading to unreadable code
//this leads to a callback hell pyramid 
//t solve this problem of callsback, we will use promises 