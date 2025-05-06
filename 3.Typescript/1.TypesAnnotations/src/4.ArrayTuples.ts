//square bracket syntax.
//let variableName: type[] = [] - where the type can be an object, string
//number....

type Book = {
    title: string;
    author: string;
    price: number
}
let books: Book[] = []

//array of strings
const myAlbums = ["Rubber Soul", "Revolver", "P alps"]
let albums: string[] = myAlbums

//array of numbers  
let marks: number[] = [23, 45, 67, 89]

//The second option is to explicitly use the Array
// let variableName: Array<type> = Arrayvalue
export type BookType = {
    title: string;
    author: string;
    price: number
}
const jsonData: Array<BookType> = [
    { title: "Mocking Bird", author: "Jabeer", price: 23 }
]
let albumsArray: Array<BookType> = jsonData


//array of strings
const myAlbumsArr = ["Rubber Soul", "Revolver", "P alps"]
let albumsArr: Array<string> = myAlbums

//array of numbers  
let marksArr: Array<number> = [23, 45, 67, 89]


//array of objects 
type Album = {
    artist: string;
    title: string;
    year: number;
};

let selectedDiscography: Array<Album> = [
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

let myAlbumsSongs: Album[] = []




//tuples
//tuples are immutable(unchangeable) data structures
//it is an array of related types 
//tuples are useful for grouping related information together 
//without having to create a new type 
//let variableName: [type1, type2] [data1, data2]
let albumWithPlayCount: [Album, number] = [
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1965,
    },
    1000000
]

//naming tuples make it easier to understand their types
type MyTuple = [album: Album, playCount: number]
let albumWithPlayCount1: MyTuple = [
    {
        artist: "The Beatles",
        title: "Revolver",
        year: 1965,
    },
    1000000
]


//exercise 
type ShoppingCart = {
    userId: string;
    //lets add items as arrays
    items: Array<string>
};

const processCart = (cart: ShoppingCart) => {
    // Do something with the cart in here
};

processCart(
    {
    userId: "user123",
    items: ["item1", "item2", "item3"],
  }
);

type IngredientType = {
    name: string;
    quantity: string
}
type Recipe = {
    title: string;
    instructions: string;
    // ingredients: Array<{name: string; quantity: string}>
    // ingredients: IngredientType[]
    ingredients: Array<IngredientType>

  };
  
  const processRecipe = (recipe: Recipe) => {
    // Do something with the recipe in here
  };
  
  processRecipe(
    {
    title: "Chocolate Chip Cookies",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
  }
);