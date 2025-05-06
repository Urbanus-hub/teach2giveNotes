//using promises to fetch data
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
//resolve the promise 
promise.then((response) => response.json()) //Promise { <pending> }
    .then((jsonData) => console.log(jsonData))
    ////{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }


//lets use async await  
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder3.typicode.com/todos/2') 
        const dataJson = await response.json()
        console.log(dataJson)
    } catch (error) {
        console.error(error.message) //fetch failed - if maybe the end point is wrong 
    }
}  

 fetchData()
//  {
//     userId: 1,
//     id: 2,
//     title: 'quis ut nam facilis et officia qui',
//     completed: false
//   }
