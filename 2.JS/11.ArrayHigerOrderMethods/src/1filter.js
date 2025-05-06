//filter method creates a new array with all elements that pass the test
//must have a return keyword or return immedetate ()


/**
 *arrayName.filter((value, index, array) => {
  // Function body
});

array.filter(callbackfn, thisArg);
 */
//Returns a New Array: 
//Requires return - opting the return will lead into an empty  array 
//immutability - 
//() => ()
const availableFoods = [
    { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
    { id: "qwe2356dxh", name: "Pizza", image: "🍕🍕", price: 400 },
    { id: "qwe2456yh", name: "Meat", image: "🍖🍖", price: 500 },
    { id: "qwe2785yh", name: "Chicken", image: "🍗🍗", price: 1200 },
];

const filtererdFoods = availableFoods.filter((foodObject) => (
    //based on the condition passed here,
    //will return that array
    foodObject.price < 450
))
console.log(filtererdFoods)
/**
 *[
  { id: 'qwe234dfh', name: 'Burger', image: '�🍔'', price: 234 },
  { id: 'qwe2356dxh', name: 'Pizza', image: '�🍕'', price: 400 }
]
 */