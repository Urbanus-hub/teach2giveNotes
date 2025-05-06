// this .....reference to an object {}
// on the browser, this keywword refers to the global window object

// global context of this  is an object
console.log(typeof this); // object

// function context of this keyword

//1: normal functions 
function myFunction() {
  console.log(this); // // prints the global window object
}
myFunction()

'use strict'
function myFunction() {
  console.log(this); // undefined
}
myFunction()


//lets use this keyword to access values of objects
const hero = {
  name: 'The Mandalorian',
  phrase: "This is the way",

  //a function
  speak: function () {
    // to access the object valuse from within the obkect use this keyword
    return `${this.name} always says ${this.phrase}`
  }
}
console.log(hero.speak()); // The Mandalorian always says This is the way



// referencing constructor parameters without this keyword
class Country {
  constructor(name, yerFounded) {
    let countryName, yearOfCountry;
    countryName = name
    yearOfCountry = yerFounded
  }
}
// referencing constructor parameters  this keyword
class Country2 {
  constructor(name, yerFounded) {
    this.name = name
    this.yerFounded = yerFounded
  }
}


// this keyword with function constructor
function country(name, yerFounded) {
  //this keyword was only able to acces the context within
  this.name = name
  this.yerFounded = yerFounded
  this.describe = function () {
    console.log(`${this.name} was funded in ${this.yerFounded}`);
  }
}
// create an instance of the function or class
const Kenya = new country('Kenya', 1960)
Kenya.describe() // Kenya was funded in 1960


// normal functions can not access outer contexts of this -  function name() {}
// arrow functions can  access outer contexts of this -  () => {}