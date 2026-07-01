// // שאלה 5
// const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
// const data =  await result.json()
// console.log(data)

// // שאלה  6
// async function Done() {
//     return "Done"
// }
// console.log(await Done())

// // תרגיל 7
// async function number(num) {
//     return num ** 2
// }
// console.log(await number(5))

// // תרגיל 14
// async function callApi() {
//     try{
//     const api1 = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const api2 = await fetch("https://jsonplaceholder.typicode.com/todos/2")
//     if (!api1.ok || !api2.ok){
//         throw new Error("somthing warng")
//     }
//     const data = await api1.json()
//     const res = await api2.json()
//     return {data,res}
// }  catch (err){
//     console.log(err.message)
// }
// }

// console.log(await callApi())

// שאלה 15
// async function allpromise() {
//     try {
//         const api = await Promise.all(
//             [fetch("https://jsonplaceholder.typicode.com/todos/1"),
//             fetch("https://jsonplaceholder.typicode.com/todos/2"),
//             fetch("https://jsonplaceholder.typicode.com/todos/3")
//             ]
//         )
//         const data = []
//         for (const obj of api) {
//             if (!obj.ok) {
//                 throw new Error(`status:${obj.status} ${obj.statusText}`)
//             }
//             const res = await obj.json()
//             data.push(res);
//         }
//         return data
//     } catch (err) {
//         console.log(err.message)
//     }
// }
// console.log(await allpromise())

// תרגיל 16
// async function allpromise() {
//     try {
//         const api = await Promise.all(
//             [fetch("https://jsonplaceholder.typicode.com/todos/1"),
//             fetch("https://jsonplaceholder.typicode.com/todos/2"),
//             fetch("https://jsonplaceholder.typicode.com/todos/3")
//             ]
//         )
//         const promise = await Promise.all(
//             api.map((res) =>  res.json())
//         )
//         return promise
//     }
//     catch(err){
//         console.log(err.messages)
//     }
// }
// console.log( await allpromise())
// תרגיל 18
// async function getUrl(arrayURL) {
//     try{
//     let array = []
//     for (let url of arrayURL){
//         const responce = await fetch(url)
//         if(!responce.ok) throw new Error(`status:${responce.status} ${responce.statusText}`)
//         let data = await responce.json()
//         array.push(data)
//     }
//     return array
// } catch(err){
//     console.log(err.messages)
// }

// }
// console.log(await getUrl([
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/todos/3"
// ]))

// תרגיל 19
async function getUrl (arrayURL) {
    try{
    const responce = await Promise.all(
        arrayURL.map(((url) => fetch(url) ))
    )
    let array = []
    for (let res of responce){
        if (!res.ok) throw new Error(`status:${res.status} ${rse.statustext}`)
        const data =  await res.json()
        array.push(data)

        
    }
    return array
} catch(err){
    console.log(err.messages)
}

}
console.log(await getUrl([
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
]))
