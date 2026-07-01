import fs from 'fs'
import fsPromises from 'fs/promises'
// תרגיל 1
const writeFile = function writeFileAsPromise(filePath, content){
    return new Promise((res,rej) => {
        fs.writeFile(filePath,content,(err) => {
            if (err) rej(err)
            res("succsses to writefile") 
    })
    
        
    })
}
writeFile("data/message.txt","i love promise")
.then((msg) =>{console.log(msg)})
.catch((err) => {console.log(err)})

// תרגיל 2
const readFile =  function readFileAsPromise(filePath){
    return new Promise((res,rej) => {
        fs.readFile(filePath,"utf-8",(err,data) =>{
                if(err) rej(err)
                res(data)
        })
    })
}
readFile("data/message.txt")
.then((data) => console.log(data) )
.catch((err) => console.log(err))

// שאלה 3
function readFileAndCount(filePath){
    return new Promise((res,rej) => {
        fs.readFile(filePath,"utf-8",(err,data) => {
            if (err) rej(err)
            res(data.length)
        })
    }
    )
}
readFileAndCount("data/message.txt")
.then((data) => console.log(data))
.catch((err) => console.log(err))

//שאלה 4
function appendFileAsPromise(filePath){
    return new Promise((res,rej) => {
        fs.writeFile(filePath, "",(err) => {
            if (err) rej(err)
            res()
        })
    })
}
appendFileAsPromise("data/step1.txt")
.then(() =>{console.log("srep1 done"); return appendFileAsPromise("data/step2.txt")})
.then(() => console.log("step 2 done"))
.catch((err) => console.error(err))

// שאלה 5
let allFile = []
function callFile(filePath){
    return new Promise((res,rej) =>{
        fs.readFile(filePath,"utf-8",(err,data) => {
            if (err) rej(err)
            allFile.push(data)
            res(allFile)
        })
    })
}
callFile("../../callbacks-fs-practice/data/step1.txt")
.then((data) => callFile("../../callbacks-fs-practice/data/step2.txt"))
.then((data) => callFile("../../callbacks-fs-practice/data/step3.txt"))
.then((data) => console.table(data))
.catch((err) => console.log(err))

//שאלה 6
function readFiles(filePath){
    return new Promise((res,rej) => {
        fs.readFile(filePath,"utf-8",(err,data) =>{
            if (err) rej(err)
            res(data)
        })


    }
)
}
function writetoFile(filePath,content){
    return new Promise((res,rej) => {
        fs.writeFile(filePath,content,(err) => {
            if (err) rej(err)
            res(content)
        })
    }
)
}
let body = "" // דרך 1
readFiles("data/report-title.txt")
.then((data) => {body += " " + data; return readFiles("data/report-body.txt")})
.then((data) => {body += " " +  data; return writetoFile("data/final-report.txt",body)})
.then((data) => console.log(data))
.catch((err) => console.log(err))

Promise.all([   // דרך 2
    readFiles("data/report-title.txt"),
    readFiles("data/report-body.txt"),
    ])
.then((data) => {writetoFile("data/final-report.txt",data.join("\n")),console.log(data)})
.catch((err) => console.log(err))


// תרגיל 7
function readFileAsPromise(filePath){
    return fsPromises.readFile(filePath,"utf-8")
}

readFileAsPromise("data/message.txt")
.then((data) => console.log(data) )
.catch((err) => console.log(err))

// תרגיל 8
function call(filePath){
    return fsPromises.readFile(filePath,"utf-8")
}
let bod = ""
call("../../callbacks-fs-practice/data/step1.txt")
.then((data) => {bod+= " " + data;  return callFile("../../callbacks-fs-practice/data/step2.txt")})
.then((data) => {bod += " " + data;return callFile("../../callbacks-fs-practice/data/step3.txt")})
.then((data) => {bod +=" " + data;return console.log(body)})
.catch((err) => console.log(err))




    
