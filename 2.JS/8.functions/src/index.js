// a function is a block of code that execute s a certain functionality 
//an example of a fnctionality could be fetching data from an online api, calculation average, calculating multiplication of two inputs
// the function keyword is used to define a function 
//a function must have a () 

//a normal function sytax
function nameOfTheFunction() {}

//an arrow function 
const functionName = () => {}

//inside the paranthesis you put your code to be executed based on your functionality 
const salesData  = require('./data.json') 
function fetchSale() {
  //this is where the code to execute will be written
  console.log(salesData)
}
//each function needs to be called into the call stack to await execution 
// each execution occurs in a LIFO - Last In First Out 
fetchSale()


//sometimes a function may have a return value 
//we define a return value using a return keyword
//the return keyword is used to retun the value needed by that function
//for example we could create a function that takes in all your marks and return their average and their total 

//a function can also contain an argument,
//whats an argument - representation of a data type to be passed as an input later when the function 
//the argument passed can be of any type  - {}, "", 0, []....
function myGoodFn(data) {
  return data
}
//if you return inside the function, to print you need to put the function isnide console log
console.log(myGoodFn({name:"Alamin", laptop: "Lenovo"})) //{ name: 'Alamin', laptop: 'Lenovo' }
console.log(myGoodFn([123,"Ali", 45, 345667])) //[ 123, 'Ali', 45, 345667 ]
console.log(myGoodFn("I love eating Ugali")) //I love eating Ugali

//most of the times, the argument is used for manipulation e.g looping through it, e.g calulation git with something else
//lets create a function that calculates totoal and average of all marks
function average(marksArray) {
  //based on marksArray that I will pass later, 
  //I will do some manupulations to calluclate avaerage

  //get total
  let total = 0
  for (const mark of marksArray) {
    total = total + mark
  }
  // return total //1635
  //get the average = total/number of marks
  let average = 0
  average = total/ marksArray.length
  return `total is : ${total}  and average is: ${average}`
}
console.log(average([123,45,678,789]))


//adding a return type to arrow function 
const circleArea = (radius) => {
  return `The area of a circle is : ${Math.PI *radius**2}`
}
console.log(circleArea(7))

//arrow functions sometimes can return immedietly AND DONT need a return keyword 
//in the place of {} put () and no return keyword will be needed 
const circleArea1 = (radius) => (
 `The area of a circle is : ${Math.PI *radius**2}`
)
console.log(circleArea1(7))


//Immediettly invoked function 
//(() => {}) // --> immedeitly invoked arrow function 
//(function fnName() {}) //// --> immedeitly invoked arrow function 
const { Collection } = require("mongodb");
const { MongoClient } = require("mongodb");

//MongoDb connection string
const uri = "mongodb://localhost:27017/my_blogs";

//connect to MongoDb
const client = new MongoClient(uri);

(async function insertDocuments() {
    try {
        await client.connect();
        console.log("connected to DB");

        //access the database and collection
        const database = client.db("my_blogs");
        const collection = database.collection("users");

        // Find documents matching a query using greater than operator 
        const query = { age: { $gt: 30 } }
        const cursor = collection.find(query)

        //iterate over the cursor to access the documents
        await cursor.forEach(document => {
            console.log('Found the document:', document)
        })


        //querying an array of elememts  
        const queryArr = { hobbies: 'gaming' } //find documents where gaming is a hobby 
        const cursorArr = collection.find(queryArr)

        //iterate through cursorArr and get all docs 
        await cursorArr.forEach(docs => {
            console.log('Found all dics where gaming is hobby', docs)
        })


        //querying using logical operators 
        const queryLogical = {
            $or: [
                { age: { $gt: 30 } }, // Find documents where age is greater than 30
                { hobbies: 'reading' } // or documents where 'reading' is a hobby
            ]
        }

        //get docs based on the logical operator
        const cursorLogical = collection.find(queryLogical)
        await cursorLogical.forEach(docs => {
            console.log('Found docs where reading is hobby', docs)
        })
    } catch (error) {
        console.error('Error finding documents:', error)
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
})
    ()    

    (function reverseName() {
        console.log("Ali".split('').reverse().join(''));
    })();
    