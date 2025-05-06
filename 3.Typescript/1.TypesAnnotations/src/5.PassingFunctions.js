"use strict";
// Functions in TypeScript can be passed as arguments to other functions, which is a fundamental concept in functional programming.
Object.defineProperty(exports, "__esModule", { value: true });
//using the mapper type function type
const mapOverItems = (items, map) => {
    return items.map(map);
};
//you can define the function type inline 
const mapOverItems1 = (items, map) => {
    return items.map(map);
};
//how can yopu use a function that takes another function as a parameter
const arrayOfIems = mapOverItems(['1', '2', '3'], (item) => {
    return Number(item);
});
console.log(arrayOfIems); //[ 1, 2, 3 ]
const loggedInfo = (user) => {
    return 123;
};
const getUser = async (id) => {
    const response = await fetch(`www.todo.com/api`);
    const jsonData = await response.json();
    return jsonData;
};
//Passing Generic types to functions 
function processItems(items, processor) {
    items.forEach(processor);
}
processItems([1, 2, 3], (item) => console.log(item * 2)); //2/4/6
processItems(['a', 'b', 'c'], (item) => console.log(item.toUpperCase())); //A/B/C
const data = [1, 3, 5, 6];
/**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
//    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
data.map((item) => item * 2);
