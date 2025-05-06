// a Datastructure is anything that holds data in a certain stucture
// an Object is a data structure that holds data in form of keys and value pairs
//an object can be created using {} - [[Prototype]] :object

//on an object you add , commas after every pari of key-value
//{key1:value, key2:value2, ......}

//empty object 
const myObject = {}
console.log(typeof myObject) //object


//how do we add data to an object 
//using dot notation 
//objectName.key = value
myObject.firstName = 'Alamin' //string
myObject.age = 25 //number
myObject.marks = [123, 45, 67, 78]  //array 
myObject.info = {idNum: 333444555, country: 'Kenya'} //object
console.log(myObject)
/**
 {
  firstName: 'Alamin',
  age: 25,
  marks: [ 123, 45, 67, 78 ],
  info: { idNum: 333444555, country: 'Kenya' }
}
 */

//objects cn contain different types of data types
const Bruno = {
    fname: 'Bruno', //string
    age: 26, //number
    marks: [23,45,"D minus"], //arrays
    goveInfo: {
        idNumbeer: 1234567,
        location: 'Nairobi'
    }, //object 
    meanGrade: function (meanGrade){ //function 
        return meanGrade
    }
}



//access modifies in Objects 
//1: dot notation 
//2: index string type
//3: using Object.keys
//4:destructuring
//5: using the this keyword 

//1: using dot notation
//objectName.keyName
console.log(Bruno.age) //26

//2: index string type - pass on a key as a string inside  []
//objectName["keyName"]
console.log(Bruno["age"]) //26

//3: using Object.keys
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
//Object.keys(objectName) ---> returns all keys as strings 
console.log(Object.keys(Bruno)) //[ 'fname', 'age', 'marks', 'goveInfo', 'meanGrade' ]
//lets access the age key 
let arrayKeys = Object.keys(Bruno)
console.log(arrayKeys[1]) //age
//once we get the key we need, we can now use the string key type to access value
console.log(Bruno[arrayKeys[1]]) //26

//just to scare yoy, make it complex  
//objectName[Object.keys(objectName)[index]]
console.log(Bruno[Object.keys(Bruno)[1]]) //26 


//the fifth way - useing the this keyword 
//this keyword is used to refer to the current contex  
const myInfo = {
    name: 'Emmanuel',
    age: 30,
    hobbies: ["Reading", "Writing"],
    isMarried: false,
    meanGrade: function grades(meanGrade) {
        return "Your mean grade is: " + meanGrade
    },
    keyFn: function(n) {
        //Bruno[Object.keys(Bruno)[1]]
        //objectName[Object.keys(objectName)[index]]
        //this ---- refers to this object which is myInfo
        return this[Object.keys(this)[n]]
    }
} 
console.log(myInfo.keyFn(1)) //30



// an array of objects 
const products = [
    {
      id: "001",
      name: "Wireless Mouse",
      description: "A high-precision wireless mouse with adjustable DPI settings.",
      price: 29.99,
      category: "Electronics",
      stock: 150
    },
    {
      id: "002",
      name: "Bluetooth Headphones",
      description: "Over-ear Bluetooth headphones with noise cancellation.",
      price: 89.99,
      category: "Electronics",
      stock: 75
    },
    {
      id: "003",
      name: "Ergonomic Office Chair",
      description: "An ergonomic office chair with adjustable height and lumbar support.",
      price: 199.99,
      category: "Furniture",
      stock: 20
    },
    {
      id: "004",
      name: "Yoga Mat",
      description: "A non-slip yoga mat with extra cushioning for comfort.",
      price: 24.99,
      category: "Fitness",
      stock: 100
    },
    {
      id: "005",
      name: "Stainless Steel Water Bottle",
      description: "A durable stainless steel water bottle with a leak-proof cap.",
      price: 15.99,
      category: "Home & Kitchen",
      stock: 200
    }
  ];
console.log("this is data in form of objcts", products)
//we can use JSON.stringfiy() - converst a javascript object into a string 
console.log("this is data as json strings", JSON.stringify(products))