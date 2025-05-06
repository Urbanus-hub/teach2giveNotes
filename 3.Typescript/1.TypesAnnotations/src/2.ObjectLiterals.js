"use strict";
// interface infoTypes {
//     name: string[];
//     age: number;
//     areChamps: boolean;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const info: infoTypes = {
//     name: ["AJ", "Tyson ", "Kaloki"],
//     age: 23,
//     areChamps: true
// }
// When defining an object type, we use curly braces to contain the properties and their types:
const syntaxObjParam = (info) => {
};
const talkToAnimal = (animal) => {
    // rest of function body
    console.log(animal.name, animal.age, animal.type);
};
const cow = {
    name: "Cow", type: "Mamal", age: 23
};
talkToAnimal(cow); //Cow 12 Mamal
// We can use ? operator to mark the age property as optional:
//lets make age optional 
const talkToAnimal1 = (animal) => {
    // rest of function body
    console.log(animal.name, animal.type);
};
const cow1 = {
    name: "Cow", type: "Mamal"
};
talkToAnimal1(cow1); //Cow 12 Mamal
const concatName = (user) => {
    return `${user.first} ${user.last}`;
};
const nameObj = {
    first: "joel",
    last: "Irungu"
};
concatName(nameObj);
