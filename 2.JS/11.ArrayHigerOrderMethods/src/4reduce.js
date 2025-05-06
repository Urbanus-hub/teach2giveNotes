// apply a function to each element of an array,
// reducing the array to a single value
//  It’s particularly useful for accumulating results,
// performing calculations, or combining data from an 
// array into a single output

/**
 array.reduce((previousVal, currentValue, currentIndex, array) => {
  // Function body
}, initialValue);
 */

//Returns a Single Value: Unlike map or filter, reduce 
//returns a single value after processing all elements.

//Accumulation: reduce is often used to accumulate 
// values or perform aggregations on array elements.

//Initial Value: If no initialValue is provided, the first element
// of the array will be used as the initial previousValue,
// and iteration will start with the second element.

// returned a single value of the total marks
const marks = [1, 2, 3, 4, 5, 6]
const reducedMarks = marks.reduce((prev, next) => {
  return prev + next
})
console.log(reducedMarks); // 21


// using the map-reduce algorithm 
// we will access the foodObjecst
// then we will get the foodPrices from the objects
// then we will reduce the prices into a single price
const myDinner = [
  { image: "🍕", name: "pizza", price: 1000 },
  { image: "🍔", name: "burger", price: 800 },
  { image: "🥪", name: "sandwich", price: 600 },
];

/// extract prices using map 
const totalPriceArray = myDinner.map((foodObj) => {
  return foodObj.price
})
console.log(totalPriceArray); // [ 1000, 800, 600 ]

// calculate total bill using reduce
const totalBill  = totalPriceArray.reduce((prev, next) => {
  return prev + next
})
console.log(totalBill, " is the total bil")

// let combine it into one code
const totalBill2 = myDinner.map((foodObj) => foodObj.price).reduce((prev, next) => prev + next)

console.log(totalBill, "my total bill");                          