const http = require("http");
const express = require("express");

const app = express();

//declaring methods 
app.get("/", (req,res)=>{
    res.send("Welcome home");
});

app.get("/about", (req,res)=>{
    // const name = req.query.name;
    // if(name){
    //     res.send(`About ${name}`)
    // }
    // else{
    //     res.send("Cannot fetch name");
    // }
    res.send(req.query.name + "Done now");
});

const myServer = http.createServer(app);

myServer.listen(4000, ()=>{
    console.log("Server connected..");
});
