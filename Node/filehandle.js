const fss = require("fs"); //fs file system
const {writeFile} = require("fs/promises");

fss.writeFileSync("./test.txt", "Testing...");
// fss.appendFileSync("./test.txt", "Testing...");
// fss.writeFile("./test1.txt", "Testing...", (error)=>{
fss.writeFile("./test1.txt", "Testing...", (error)=>{
    console.log("Some error has occured:" + error);
});

// fss.appendFile("./test1.txt", "Testing...", (error)=>{
//     console.log("Some error has occured:" + error);
// });

// fss.readFile("./test.txt", "utf-8", (err,result)=>{
// if(err)
//     {
//     console.log("error has occured: " + err);
// }
// else{
//     console.log(result);
// })

// let result = fss.readFileSync("./test1.txt", "utf-8");

fss.readFile("/test.txt", "utf-8", (err,result)=>{
    if(err){
        console.log("error has occured: "+ err);
    }
    else{
        console.log(result);
    }
})

let result = fss.readFileSync("./test1.txt", "utf-8");
