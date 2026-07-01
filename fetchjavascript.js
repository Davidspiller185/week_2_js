// // שאלה 1
fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((responce) => {
//     if(!responce.ok){
//         throw Error(`status${responce.status} ${responce.statusText}`);
//     }
//     return responce.json()}
// )
// .then((data) => console.log(data.title))
// .catch((err) => console.log(err))
// // שאלה 2
// fetch("https://jsonplaceholder.typicode.com/notfound")
// .then((responce) => {
//     if(!responce.ok){
//         throw Error(`status: ${responce.status} ${responce.statusText}`)
//     }
//     return responce.json()
// })
// .then((data) => console.log(data.title))
// .catch((err) => console.log(err))

// // שאלה 3
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((responce) =>{
//     if(!responce.ok){
//         throw Error(`status: ${responce.status} ${responce.statusText}`)
//     }
//     return responce.json()
// })
// .then((data) => {
//     const title = data.map(obj => obj.title)
//     return title
// })
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// שאלה 4
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({
//         title:"כותרת חדשה",
//         body:"תוכן הפוסט",
//         userId:1
// })
// })
// .then((responce) =>{
//     if(!responce.ok){
//         throw Error(`status:${responce.status} ${responce.statusText}`)
//     }
//     return responce.json()
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// שאלה 5
// function getUserById(id){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((responce) =>{
//         if (!responce.ok){
//             throw Error(`status:${responce.status} ${responce.statusText}`)
//         }
//         return responce.json()
//     })
//     .catch((err) => (err))
// }
// getUserById(1)
// .then((data) => console.log(data))
// .catch((err) => console.log("id not found",err))

// שאלה 6
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((responce) =>{
//     if (!responce.ok){
//         throw Error(`status: ${responce.status} ${responce.statusText}`)
//     }
//     return responce.json()
// })
// .then((data) => {const user = data.userId;return{title:data.title,user:user}})
// .then((obj) => console.log(`title:${obj.title}, user:${obj.user}`))
// .catch((err) => console.log(err))

// תרגיל 7
// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1"),
//     fetch("https://jsonplaceholder.typicode.com/posts/1"),
//     fetch("https://jsonplaceholder.typicode.com/todos/1")    
// ])
// .then((responces) =>{
//     return Promise.all(responces.map((responce) =>{
//     if(!responce.ok){
//         throw Error(`status:${responce.status} ${responce.statusText}`)
//     }
//     return responce.json()
    
// }))
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// תרגיל 8
// const controller = new AbortController()
// const timeoutId = setTimeout(() => {
//     controller.abort()
// },3000)
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     signal:controller.signal
// })
// .then((responce) => {
//     clearTimeout(timeoutId)

// if (!responce.ok) throw new Error(`status:${responce.status} ${responce.statusText}`)
// return responce.json()
// })
// .then((data) => console.log(data))
// .catch((err) => {
//     if (err.name === "AborrtError"){
//         console.log("fetch cancel past 3 second")
//     }
//     else{
//         console.log(err.message)
//     }
// })

//שאלה 9
function fetchWithRetry(url,retries){
    return fetch(url)
        .then((responce) =>{
            if(responce.ok){
                return responce.json()
            }
            if (retries>0){
                return fetchWithRetry(url,retries-1)
            }
            throw new Error(`status:${responce.status} ${responce.statusText}`)

        })
        
}
fetchWithRetry("https://jsonplaceholder.typicode.com/users/1",3)
.then((data) => console.log(data))
.catch((err) => console.log(err.message))

              
    
    


