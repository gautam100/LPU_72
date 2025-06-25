let fs = require("fs");
//Block Code
function readFileSync(){
    console.log("Starting...")
    let content = fs.readFileSync("./data/content.txt","utf-8");
    console.log(content);
    console.log("Ending...")
}
readFileSync();
console.log("`````````````````````````");

//Non Block code
function readFileAsync(){
    console.log("starting...");
    fs.readFile("./data/content1.txt","utf-8",(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
    })
    console.log("Ending...")
}
readFileAsync();