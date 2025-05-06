//async -await is an asynchronous execution flow where a promise is automatically fullfilled 
//adding an async keyword before a function will return a new promise automatically

//inside the async function we use await keyword to pause execution 

//this is good but longer

// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     resolve(x + y) 
//   })
// }

//Simplified Syntax:
//Error Handling:
//Avoiding Callback Hell:
async function add(x, y) {
  return x + y
  // This returns a Promise that resolves to x + y
}

const addMarks = async () => {
  // We can use await here to pause execution until add resolves
  console.log(`I am adding marks.............`)
  const result = await add(4, 5)
  console.log(result);
}
addMarks()


///Netflix prolem using cleaner syntax 

// Simulate user login
async function loginUser(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`We are logging into Netflix`);
      resolve({ userEmail: email, userPassword: password });
    }, 3000);
  });
}

// Get all videos for the logged-in user
async function getAllVideos({ userEmail }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`We have all the recently watched videos`);
      const videosInfo = ["Star Wars", "The Mando", "The Lord of the Rings"];
      resolve({ userEmail, videosInfo });
    }, 3000);
  });
}

// Get details of one specific video
async function getVideoInfo(videosInfoObj) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`We have the details of one video`);
      resolve({ video: videosInfoObj.videosInfo[1] }); // The Mando
    }, 3000);
  });
}

// Async function to execute the flow
async function fetchUserVideos() {
  try {
    const user = await loginUser("jay@duff.com", "1234rhgivshcbjk");
    const videos = await getAllVideos(user);
    const videoDetails = await getVideoInfo(videos);
    console.log(videoDetails);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
}

// Execute the function
fetchUserVideos();
