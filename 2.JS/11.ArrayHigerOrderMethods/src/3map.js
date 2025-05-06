// The map method creates a new array populated with the results of calling a provided function on every element in the calling array. Unlike forEach, map returns a new array and does not modify the original array.
//array.map(callbackfn);
//Returns a New Array
//Requires return
//Immutable: The map method does not modify the original array.
let runners = ['Kiplimo', 'Kiprotich', 'Koskei']
const new_runners = runners.map((runner) => {
    //Iterates over each element and performs a given operation.
    return `${runner} runs 10km race`
})
console.log(new_runners)
/** 
 [
  'Kiplimo runs a 100 meters',
  'Kipchumba runs a 100 meters',
  'Koskei runs a 100 meters'
]
*/


const initialFoodPrices = [
    { image: "🍕", name: "pizza", price: 1000 },
    { image: "🍔", name: "burger", price: 800 },
    { image: "🥪", name: "sandwich", price: 600 },
  ];

  const newFoodArrays = initialFoodPrices.map((foodObj) => {
    return foodObj
  })
  newFoodArrays //this returns a new array containing all foods

  //lets say, there is a price hike of 50 bob
  //add 50 bob to each price 
  let newPrice = initialFoodPrices.map((foodObj) => {
    return foodObj.price + 50
  })
newPrice // [1050, 850, 650]