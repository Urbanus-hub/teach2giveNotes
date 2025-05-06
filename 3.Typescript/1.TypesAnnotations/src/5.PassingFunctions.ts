// Functions in TypeScript can be passed as arguments to other functions, which is a fundamental concept in functional programming.

//function Types 
//when passing funstions , it is very imporatnt to define their types 

//basic function tpe definition
//type functionName = (args: typesOFArgs) => returnType or void
type Mapper = (item: string) => number //--this func takes a string item and return a number

//using the mapper type function type
const mapOverItems = (items: string[], map: Mapper) => {
    return items.map(map)
}

//you can define the function type inline 
const mapOverItems1 = (items: string[], map: (item: string) => number) => {
    return items.map(map)
}
//how can yopu use a function that takes another function as a parameter
const arrayOfIems = mapOverItems(['1', '2', '3'], (item) => {
    return Number(item)
})
console.log(arrayOfIems) //[ 1, 2, 3 ]


//functions parameters variations 
//functions in Typescript can have differenrt parameters configurations 
//1:optional parameters
type WithOptional = (index?: number) => number
//2:Rest parameters
type WithRest = (...arg: string[]) => number
//multiple parametres
type WithMultipleParams = (first: string, second: string) => number

//Return types
//When defining functions that take other functions as parameters, you can specify the return type:
// const functionName = ():returnType => {}
type User = {
    username: string;
    password: string;
}
const loggedInfo = (user: User): number => {
    return 123
}

//Async functions  
//for asynchnronos function the return type should be a promise 
type User1 = {
    username: string;
    authStatus: string;
}
const getUser = async (id: string): Promise<User1> => {
    const response: Response = await fetch(`www.todo.com/api`)
    const jsonData = await response.json()
    return jsonData
}


//Passing Generic types to functions 
function processItems<T>(items: T[], processor: (item: T) => void): void {
    items.forEach(processor)
}
processItems([1, 2, 3], (item) => console.log(item * 2)) //2/4/6
processItems(['a', 'b', 'c'], (item) => console.log(item.toUpperCase())) //A/B/C

const data: Array<number> = [1, 3, 5, 6]
/**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
//    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
data.map((item) => item * 2)