import fs from 'fs'
import { json } from 'stream/consumers'
// // תרגיל 1
// const message = "hello from Node fs!"
// fs.writeFile("data/message.txt",JSON.stringify(message),(err) =>{
//     if (err) return console.log(err)
//     console.log("File was created successfully")
// }) 
// // תרגיל 2
// fs.readFile("data/message.txt","utf-8",(err,data) =>{
//     if (err) return console.log(err)
//     console.log(data)
// })
// // תרגיל 3
// console.log("start")
// fs.readFile("data/message.txt","utf-8",(err,data) =>{
//     if (err) return console.log(err)
//         console.log(data)
// })
// console.log("end")
// // תרגיל 4
// fs.readFile("data/b.txt","utf-8",(err,data) => {
//     if (err) return console.log("could not read file",err)
//         console.log(data)
// })
// // תרגיל 5
// function readTextFile(filePath,callback){
//     fs.readFile(filePath,"utf-8",callback)
// }
// readTextFile("data/message.txt",function(err,data) {
//     if (err) return console.log("Error:",err)
//     console.log(data)
// })
// //תרגיל 6
// const append= "This line was addes later"
// fs.appendFile("data/message.txt","\n" + JSON.stringify(append),(err) =>{
//     if (err) return console.log(err)
//     console.log("append succssefuly")
//     fs.readFile("data/message.txt","utf-8",(err,data) =>{
//         if (err) return console.log(err)
//         console.log(data)
//     })
// })
// תרגיל 7
// fs.writeFile("data/log.txt",JSON.stringify("Log started"),(err) => {
//     if (err) return console.log(err)
//     fs.appendFile("data/log.txt", "\n" + JSON.stringify("First action completed ") + "\n" + JSON.stringify("Second action completed"),(err)=>{
//         if (err) return console.log(err)
//         fs.readFile("data/log.txt","utf-8",(err,data) =>{
//             if (err) return console.log(err)
//             console.log(data)
//          })})
// })
// // תרגיל 8
// fs.mkdir("data/users",{recursive:true},(err,path) => {
//     if (path) {
//         console.log("folder created successfully")
//     } else {
//         console.log("folder already exist")
//     }

// })
// תרגיל 9
fs.mkdir("data/users",{recursive:true},(err) =>{
    if (err) return console.log(err)
    console.log("folder existsce")
})
fs.writeFile("data/users/user1.txt", JSON.stringify("Name:david") + "\n" +JSON.stringify("age:25"),(err) =>{
    if (err) return console.log(err)
    console.log("File successfully")
})
//תרגיל 10
fs.readdir("data","utf-8",(err,data) =>{
    if (err) return console.log(err)
    console.log(data)
})
// תרגיל 11
fs.writeFile("data/step1.txt",JSON.stringify("Step 1 completed"),(err) => {
    if (err) return console.log(err)
    fs.writeFile("data/step2.txt",JSON.stringify("Step 2 completed"),(err) =>{
        if (err) return console.log(err)
        fs.writeFile("data/step3.txt",JSON.stringify("Step 3 completed"),(err) => {
           if (err) return console.log(err)
            console.log("All steps completed")})})
})
//תרגיל 12
fs.readFile("data/step1.txt","utf-8",(err,data) =>{
    if (err) return console.log(err)
    const data1 = data
        fs.readFile("data/step2.txt","utf-8",(err,data) => {
            if (err) return console.log(err)
            const data2 = data
                fs.readFile("data/step3.txt","utf-8",(err,data) =>{
                    if (err) return console.log(err)
                    const data3 = data
                    console.log(data1,data2,data3)
                })
        })
    
})
// תרגיל 13
fs.writeFile("data/report-title.txt","Daily report",(err) =>{
    if (err) return console.log(err)
    fs.writeFile("data/report-body.txt", "Everything is working",(err) =>{
        if(err) return console.log(err)
        fs.readFile("data/report-title.txt","utf-8",(err,data) =>{
        if (err) return console.log(err)
        const oneData = data
            fs.readFile("data/report-body.txt","utf-8",(err,data) =>{
                if (err) return console.log(err)
                const dataTwo = data
                const addData = oneData + "\n" + dataTwo
                  fs.writeFile("data/final-report.txt",addData,(err) =>{
                    if(err) return console.log(err)
                    console.log(addData)
                  })
            })})})
})
// תרגיל 14
fs.writeFile("data/original.txt","Original file content",(err) =>{
    if (err) return console.log(err)
    fs.readFile("data/original.txt","utf-8",(err,data) =>{
        if(err) return console.log(err)
        const saveData = data
        fs.writeFile("data/copy.txt", saveData,(err) =>{
            if(err) return console.log(err)
            fs.readFile("data/copy.txt","utf-8",(err,data) =>{
                if(err) return console.log(err)
                console.log(data)})
        })})
})



