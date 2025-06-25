let fs = require("fs"); //system package
var readlineSync = require('readline-sync'); //External package

var content =  readlineSync.question('Enter Content:-');

function writeFileSync(){
    console.log("Start");
    fs.writeFileSync("./data/content.txt",content);
    console.log("End")
}
writeFileSync();

function writeFileAsync(){
    console.log("start");
    fs.writeFile("./data/content1.txt",content,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Writing completed!");
        }
    })
    console.log("End");
}
writeFileAsync();