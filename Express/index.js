const http = require("http");
const express = require("express");

const app = express();

//declaring methods 
app.get("/", (req,res)=>{
    res.send("Welcome home");
});

app.get("/about", (req,res)=>{
    res.send(req.query.name + "Done now");
});

const myServer = http.createServer(app);

myServer.listen(4000, ()=>{
    console.log("Server connected..");
});
