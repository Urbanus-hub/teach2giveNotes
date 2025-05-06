"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//How to define an oobject literal in typescript 
{ }
const person = {
    name: 'Alice',
    age: 30
};
//BY DEFAULT TS infers object  
/**
 *const person: {
    name: string;
    age: number;
}
 */
//Explicit Type Annotations/Inline Type
const person1 = {
    name: 'Alice',
    age: 30
};
//lets reuse the object shape
const Alice = {
    name: 'Alice',
    age: 30
};
const Green = {
    name: 'Green',
    age: 30
};
const Green1 = {
    name: 'Green',
    // age: 30 - coomentin gthis out, did not error
};
const manager = {
    employeeID: 123,
    employeeName: 'James',
    department: 'HR'
};
const myDog = {
    //Type '{}' is missing the following properties from type 'Dog': breed, name, agets(2739)
    name: 'Rex',
    age: 2,
    breed: 'German Shephard'
};
//create object from Dynamic keys with Index Signatures
//a key of an object is always a string and position at an index
// const syntax: {[key: string]: anyType - number, sting, array of other types}
const dynamicKeyShape = {};
dynamicKeyShape["name"] = "Alice";
dynamicKeyShape["age"] = "30";
console.log(dynamicKeyShape);
