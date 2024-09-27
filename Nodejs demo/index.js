const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) =>{
    console.log("done");
    // res.end("Welcome, user");
    // res.end("Hello User"+new Date().toISOString());
    fs.appendFile("./test.txt", "Good Job", () =>{
        console.log("Done job");
    });
    // let url = "https://www.youtube.com/";
    res.end("Finish");
});

myServer.listen(8080, ()=>{
    console.log("Server listening on 8080");
});

// http.createServer()