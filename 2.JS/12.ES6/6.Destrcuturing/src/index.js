///destructurin is an es6 feature that helps you access variable objects/arrays 
//syntax  
// const {prop1, prop2} = objectName

/*
function renderPayMentModule({admin, isAuth}) {
//const {admin, isAuth} = props


}
<renderPayMentModule admin ={1} isAuth={true} />
*/

const info = {
    fname: 'Dennis',
    sname: 'Muhia',
    idNumber: 345678876,
}

//traditional ways of accessing values of an object
console.log(info.fname + " " + info.sname) //Dennis Muhia

//use destructuring
//const {objectKey:value} = objectName
const { fname: firstname, sname: secondname } = info
console.log(`${firstname} ${secondname}`); // Dennis Muhia 


//Default values in arrays destructuring
//const [element1 = defaultValue1, element2 = defaultValue2] = array;
const numbers = [1]
const [first = 10, second = 20, third = 30] = numbers;
console.log(first) //1
console.log(second) //20
console.log(third) //30


//object default destructuring 
//const { property1 = defaultValue1, property2 = defaultValue2 } = object;
const user = {
    name: 'Alice',
    age: 25
};

//we assigned country a defualt value since its not available inside user object
const { name, age, country = 'Kenya' } = user
console.log(name) //Alice
console.log(age) //25
console.log(country) //Kenya

//default object values with renaming 
const { name: userName, age: userAge, country: userCountry = 'Kenya' } = user;

console.log(userName);    // Alice
console.log(userAge);     // 25
console.log(userCountry); // Kenya


//Destructuring in array 
// const [item1, item2] = arrayName
const num = [1, 2, 3];

//traditional ways of accessing arraya
const firstItem = num[0]
const secondItem = num[1]
const thirdItem = num[2]
console.log(firstItem, secondItem, thirdItem) //1 2 3

//use destructuring to access array values
//lets also add a default value unavailable in num
const [first1, second1, third1, fouth1 = 50] = num
console.log(first1, second1, third1, fouth1) //1 2 3

//When dealing with nested objects, destructuring becomes even more powerful by enabling you to access deeply nested properties in a straightforward manner.

const user1 = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        zip: 12345
    }
};

//to access city 
console.log(user1.address.city) //Wonderland
//// Destructuring nested object
const { address } = user1
console.log(address)//{ city: 'Wonderland', zip: 12345 }
//to destructure to a second level add : {}
const { address: { city, zip } } = user1
console.log(city) //Wonderland



//complex payment object - paypal 
const payment = {
    id: "PAY-123456789",
    intent: "sale",
    payer: {
        payment_method: "paypal",
        status: "VERIFIED",
        payer_info: {
            email: "alice@example.com",
            first_name: "Alice",
            last_name: "Liddell",
            payer_id: "PAYERID12345",
            shipping_address: {
                recipient_name: "Alice Liddell",
                line1: "123 Rabbit Hole",
                city: "Wonderland",
                state: "Fantasy",
                postal_code: "12345",
                country_code: "WL"
            }
        }
    },
    transactions: [
        {
            amount: {
                total: "100.00",
                currency: "USD",
                details: {
                    subtotal: "75.00",
                    tax: "15.00",
                    shipping: "10.00"
                }
            },
            description: "Payment for the magical items",
            item_list: {
                items: [
                    {
                        name: "Magic Potion",
                        price: "25.00",
                        currency: "USD",
                        quantity: 1
                    },
                    {
                        name: "Enchanted Sword",
                        price: "50.00",
                        currency: "USD",
                        quantity: 1
                    }
                ],
                shipping_address: {
                    recipient_name: "Alice Liddell",
                    line1: "123 Rabbit Hole",
                    city: "Wonderland",
                    state: "Fantasy",
                    postal_code: "12345",
                    country_code: "WL"
                }
            },
            related_resources: [
                {
                    sale: {
                        id: "SALE12345",
                        state: "completed",
                        amount: {
                            total: "100.00",
                            currency: "USD"
                        }
                    }
                }
            ]
        }
    ],
    create_time: "2025-02-17T00:00:00Z",
    update_time: "2025-02-17T00:05:00Z",
    links: [
        {
            href: "https://api.paypal.com/v1/payments/payment/PAY-123456789",
            rel: "self",
            method: "GET"
        },
        {
            href: "https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-123456",
            rel: "approval_url",
            method: "REDIRECT"
        },
        {
            href: "https://api.paypal.com/v1/payments/payment/PAY-123456789/execute",
            rel: "execute",
            method: "POST"
        }
    ]
};

//using dotnotations

// Accessing the payer's email using dot notation
console.log(payment.payer.payer_info.email); // "alice@example.com"

// Accessing the city from the shipping address within payer_info
console.log(payment.payer.payer_info.shipping_address.city); // "Wonderland"

// Accessing the tax details of the first transaction
console.log(payment.transactions[0].amount.details.tax); // "15.00"


//destructuring to save ourselves 
//o extract the payer's email, the shipping city, the total amount, and tax from the first transaction:
const {
    payer: {
        payer_info: {
            email,
            shipping_address: { city: myCity, postal_code }
        }
    },
    transactions: [
        {
            amount: {
                total,
                details: { tax, shipping }
            }
        }
    ]
} = payment;

console.log(email) //alice@example.com
console.log(myCity, postal_code)
console.log(total);         // "100.00"
console.log(tax);           // "15.00"
console.log(postal_code);   // "12345


// With destructuring, you extract all the necessary values in a single, concise statement, which makes your code cleaner and easier to maintain.



//destructuring nested array 
const numbers1 = [1, [2, 3], 4];
const numbers2 = [1, [[1,3, [2,4]], 3], 4];
const [one, [[two,three, [four,five]], six], seven] = numbers2
console.log(five) //4

// Nested destructuring
const [first2, [second2, third2], fourth2] = numbers1;

console.log(first2);  // 1
console.log(second2); // 2
console.log(third2);  // 3
console.log(fourth2); // 4


//you can destructure function prameters
function processNumbers([first, second, third]) {
    console.log(first, second, third);
}

const numbers4 = [1, 2, 3];
processNumbers(numbers4); // 1 2 3

/*
function renderPayMentModule({admin, isAuth}) {
//const {admin, isAuth} = props


}
<renderPayMentModule admin ={1} isAuth={true} />
*/


const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat()); 
//[ 0, 1, 2, [ 3, [ 4, 5 ] ] ]