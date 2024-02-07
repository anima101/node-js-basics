/*
const http = require("http");
http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
}).listen(8000);
console.log("application is running");
*/

// fs 

const fs = require("fs");
// creating a new file
//console.log(fs.writeFileSync("read.txt","welcome!")); 
//console.log(fs.writeFileSync("read.txt", "anima yadav ,welcome!")); 
//console.log(fs.appendFileSync("read.txt","how are you. i am fine  thank you."));

//os
/*
const os = require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);
*/