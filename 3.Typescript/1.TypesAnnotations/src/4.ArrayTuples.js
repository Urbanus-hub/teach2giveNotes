"use strict";
//square bracket syntax.
//let variableName: type[] = [] - where the type can be an object, string
//number....
Object.defineProperty(exports, "__esModule", { value: true });
let books = [];
//array of strings
const myAlbums = ["Rubber Soul", "Revolver", "P alps"];
let albums = myAlbums;
//array of numbers  
let marks = [23, 45, 67, 89];
const jsonData = [
    { title: "Mocking Bird", author: "Jabeer", price: 23 }
];
let albumsArray = jsonData;
//array of strings
const myAlbumsArr = ["Rubber Soul", "Revolver", "P alps"];
let albumsArr = myAlbums;
//array of numbers  
let marksArr = [23, 45, 67, 89];
let selectedDiscography = [
    {
        artist: "The Beatles",
        title: "Rubber Soul",
        year: 1965,
    },
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1966,
    },
];
//pushing object literals that are unavialble leads to an error
//selectedDiscography.push({ name: "Karma", type: "cat" });
let myAlbumsSongs = [];
//tuples
//tuples are immutable(unchangeable) data structures
//it is an array of related types 
//tuples are useful for grouping related information together 
//without having to create a new type 
//let variableName: [type1, type2] [data1, data2]
let albumWithPlayCount = [
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1965,
    },
    1000000
];
let albumWithPlayCount1 = [
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1965,
    },
    1000000
];
const processCart = (cart) => {
    // Do something with the cart in here
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
});
const processRecipe = (recipe) => {
    // Do something with the recipe in here
};
processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
        { name: "Flour", quantity: "2 cups" },
        { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
});
