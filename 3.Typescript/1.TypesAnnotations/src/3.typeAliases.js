"use strict";
// In TypeScript, there are multiple ways to define types. Here’s a comprehensive list of all the different ways you can define a type:
Object.defineProperty(exports, "__esModule", { value: true });
//3️⃣ Using class (With Type Annotations)
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
//4️⃣ Using enum (For Constants & Named Values)
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let bgColor = Color.Red;
//5️⃣ Using typeof (For Inferring Types from Existing Variables)
const user = { name: "Alice", age: 30 };
const roles = { alice: "admin", bob: "user" };
//we can add it as a type annotation to a new variable 
let cow = {
    name: 'cow',
    type: 'mammal',
    age: 12
};
//lets reuse it 
let cat = {
    name: 'Cat',
    type: 'Amphibian',
    age: 12
};
//we can also use the type aliases in functons 
const getAnimalDescription = (animal) => {
};
getAnimalDescription(cat);
let userID = 34567;
userID = 'bjvjkx hidfbjldsf'; //bjvjkx hidfbjldsf
console.log(userID);
//how do you share types acrross modules
// export type student = {
//     name: string;
//     age: number;
// }
//to immport in the file needed
const Jabal = {
    name: 'Jabali',
    age: 23
};
console.log(Jabal); //{ name: 'Jabali', age: 23 }
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
const rectangle1 = {
    width: 12,
    height: 23
};
console.log(getRectangleArea(rectangle1)); //276
