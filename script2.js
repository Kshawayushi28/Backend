// FS MODULE

const fs = require('fs');

// **writefile** -> creates a file 

fs.writeFile("hey.txt","hey hello kaise ho",function(err){    
    if(err) console.error(err);
    else console.log("done");
})

// **appendFile** -> append k matlab hota h likhe hue mein aage add kariye

fs.appendFile("hey.txt",", Mein toh achhi hu",function(err){  
    if(err) console.error(err);
    else console.log("done");
})

// **renameFile** 

fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})

// **copyFile**

fs.copyFile("hello.txt","./copy/chacha.txt", function(err){
    if(err) console.error(err);
    else console.log("done");
})

// for  finding error in copyFile

fs.copyFile("hello.txt","./copy2/chacha.txt", function(err){
    if(err) console.error(err.message);
    else console.log("done");
})

// **unlink** -> remove files

fs.unlink("hello.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");
})

// **rmdir** -> it removes the directory (removes folder), but yeh sirf aapko blank folders hatane ki by default permission deta h, agar kisi folder m kuch h toh wo aapko directly hatane nhi dega

fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed");
})

// HTTP & HTTPS

// How to use http protocol

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);