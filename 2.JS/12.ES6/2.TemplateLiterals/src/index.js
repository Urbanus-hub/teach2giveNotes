const fname = "Dan";
const sname = "Kitheka";
console.log("Hello " + fname + " " + sname); // Output: Hello Dan Kitheka
console.log("Hello " , fname , " " , sname); // Output: Hello Dan Kitheka

//after ES6
console.log(`Hello ${fname} ${sname}`); // Output: Hello Dan Kitheka

console.log(`${2+4}`) //6



//template literals enable multi-strings automatically
const message = `Hello,
This is a multi-line string
using template literals.`;
console.log(message);

// String Interpolation﻿
// You can embed expressions and variables inside template literals, allowing for dynamic string creation.
const price = 19.99;
const discount = 0.2;
const finalPrice = `The final price after discount is $${price - (price * discount)}`;
console.log(finalPrice); // Output: The final price after discount is $15.99

//template literals in HTML
const people = [
  { name: "Alberto", age: 27 },
  { name: "Maria", age: 30 },
  { name: "John", age: 25 }
];

const markup = `
<ul>
    ${people.map(person =>  `<li>${person.name}, Age: ${person.age}</li>`).join('')}
</ul>
`;

console.log(markup);

// Output:
// <ul>
//     <li>Alberto, Age: 27</li>
//     <li>Maria, Age: 30</li>
//     <li>John, Age: 25</li>
// </ul>

// Conditional Expressions﻿
// Template literals can also be used for conditional expressions within the string.
const isDiscounted = false;
const getPrice = () => isDiscounted ? `Discounted price: $10` : `Regular price: $20`;
console.log(getPrice()); // Output: Regular price: $20


//Template Literals with React (JSX)﻿
const isAdmin = true;
function renderPage() {
    return isAdmin ? `<div>Page for Admin</div>` : `<div>Page Not Allowed</div>`;
}

console.log(renderPage()); // Output: <div>Page for Admin</div>