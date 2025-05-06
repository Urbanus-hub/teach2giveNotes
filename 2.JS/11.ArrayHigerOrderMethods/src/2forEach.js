//the forEach iterates through each element in an array and performs an action to it  
//No return value
//its mutable - modifies the original array 
// arrayName.forEach(callbackfn)
//callbackfn - (value) => {} // without return 
//callbackfn - (value) => { return value } // with return 
//callbackfn - (value) => ( value ) // with return directly 

let runners = ['Kiplimo', 'Kiprotich', 'Koskei']
runners.forEach((runner) => {
    //Iterates over each element and performs a given operation.
    console.log(`${runner} runs 10km race`)
})
// Kiplimo runs 10km race
// Kiprotich runs 10km race
// Koskei runs 10km race


let marks = [23, 45,67,89,100]
let total = 0
[23, 45,67,89,100].forEach((singleMark) => {
    total += singleMark //total = total + singleMark
    console.log(total)
})

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
