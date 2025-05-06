//How to define an oobject literal in typescript 
{ }

const person = {
    name: 'Alice',
    age: 30
}

//BY DEFAULT TS infers object  
/**
 *const person: {
    name: string;
    age: number;
}
 */

//Explicit Type Annotations/Inline Type
const person1: { name: string; age: number } = {
    name: 'Alice',
    age: 30
}

//2. Using type to Define Object Shapes
// The type keyword allows you to define the shape of an object. This is useful when you need to use the same object structure in multiple places.
type Person = {
    name: string;
    age: number;
}

//lets reuse the object shape
const Alice: Person = {
    name: 'Alice',
    age: 30
}
const Green: Person = {
    name: 'Green',
    age: 30
}


//you can pass in optional properties using ? operator 
type PersonOptionalProps = {
    name: string;
    age?: number;
}
const Green1: PersonOptionalProps = {
    name: 'Green',
    // age: 30 - coomentin gthis out, did not error
}

//Intersection of Types
// Intersection types allow you to combine multiple types into one. This is useful when you want to create a new type that has all the propeties of the combined types
type Employee = {
    employeeID: number;
    employeeName: string;
}

type Department = {
    department: string;
}

type Manager = Employee & Department
const manager: Manager = {
    employeeID: 123,
    employeeName: 'James',
    department: 'HR'
}

//Interfaces 
//interface are other ways of constructing objects . They are similar to types but they have more capabilities like extending from other interfaces
//syntax  - there is no equal sign in interfaces like types
//has same properties inside like types
interface Animal {
    name: string;
    age: number;
}

//we can exxtend the properties of an interface and use them in anther interface
interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    //Type '{}' is missing the following properties from type 'Dog': breed, name, agets(2739)
    name: 'Rex',
    age: 2,
    breed: 'German Shephard'
}

//you can even extend interface and use u=them in files neede just like types

//diiferences between types and interface 
//interfaces can be extends but types can only be intersected 
//and the opposite is impossible  - you can not intersect interface and you can not extend types
interface A {
    propA: string;
}

interface B extends A {
    propB: number;
}

//intersection
type A_ = {
    propA: string;
};

type B_ = A_ & {
    propB: number;
};


//create object from Dynamic keys with Index Signatures
//a key of an object is always a string and position at an index
// const syntax: {[key: string]: anyType - number, sting, array of other types}
const dynamicKeyShape: { [key: string]: string } = {}
dynamicKeyShape["name"] = "Alice"
dynamicKeyShape["age"] = "30"
console.log(dynamicKeyShape) //{ name: 'Alice', age: '30' }

//example of dynamic keys with fixed properties
type User = {
    id: number;
    name: string;
    //this accepts a key name of any name that can be either a string or a number
    [key: string]: string | number
}

//there will be no error if you dont pass in a dynamic key declared
const user1: User = {
    id: 1,
    name: 'John'
}
console.log(user1) //{ id: 1, name: 'John' }

//the dynamic key value allows us to pass as many values as possible
const user2: User = {
    id: 1,
    name: 'John',
    email: "John@gmail.com",
    phone: 1234567686
}
console.log(user2) //{ id: 1, name: 'John', email: 'John@gmail.com', phone: 1234567686 }


//6: Utility types
// Typesscript proides utility functions to amke it easier to work with typescript
//common utility -
//Partial<T> - makes all the properties of a type optional 
//Required<T> - makes all properties of a thype required
//Pick<T> - creates a new type by picking a set of aproperties from an existing Type 
//Omit<T> - Creates a new type by ommiting a set f properties from an existing type
type Person1 = {
    name: string;
    age: number;
    location?: string;
};

type PartialPerson = Partial<Person1>;
type RequiredPerson = Required<Person1>;

//by ommiting some of the required properties the object did not error
const partialPerson: PartialPerson = {
    name: "Alice"
};

//   //even though location is optional in Person1, using Require<> - makes it required
//   const requiredPerson: RequiredPerson = {
//     name: "Bob",
//     age: 30,
//     //location: "New York"
//     //Property 'location' is missing in type '{ name: string; age: number; }' but required in type 'Required<Person1>'
//   };


//pick and omit
type Person2 = {
    name: string;
    age: number;
    location: string;
};

//pick the name and age from Person2
type NameAndAge = Pick<Person2, "name" | "age">
//create name and age type by ommiting location
type WithoutLocation = Omit<Person2, "location">

const nameAndAge: NameAndAge = {
    name: "Alice",
    age: 30
};

const withoutLocation: WithoutLocation = {
    name: "Bob",
    age: 25
};


//combine known and dynamic keys
//you can combine known keys using interscetion
type KnownKeys = {
    name: string;
    age: number;
};

type DynamicKeys = {
    [key: string]: string | number;
};

type Combined = KnownKeys & DynamicKeys;

const combined: Combined = {
    name: "Alice",
    age: 30,
    dynamicKey1: "value1",
    dynamicKey2: 42
};


//Interfaces support declaration merging, which allows you to extend an interface by declaring it multiple times.
//it will overload the properties 
interface Person3 {
    name: string;
}

interface Person3 {
    age: number;
}

const person3: Person3 = {
    name: "Alice",
    age: 30
};


interface Person4 {
    name: string;
    greet(): void;
}

interface Person4 {
    age: number;
    greet(): void;
}

const person4: Person4 = {
    name: "Bob",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person4.greet();  // Output: Hello, my name is Bob

//Types assertion and casting 
//You can explicityl tell Typescript the type of an object using type assertions
const someValue: unknown = "Hello Typescript"
const strLength: number = (someValue as string).length
console.log(strLength)  //16

const fullname = {
    name: 'Jay'
} as {name: string}