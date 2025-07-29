// const cookieParser = require ('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get("/", function(req, res){
    res.cookie("name", "ayushi");      // to set the cookies at any route res (respond) is used
    res.send("done");
})

app.get("/read", function(req, res){
    console.log(req.cookies);         // to read the cookies at any route req (request) is used
    res.send("read page");
})

app.get("/", function(req, res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("pololololololoooloo", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });
})

app.get("/", function(req, res){    
    bcrypt.compare("pololololololoooloo", "$2b$10$Vl.fn49Q0smuzaf/nrX6POekcqHdSkixvM2hf6AF4.jbAwFGRKu9G", function(err, result) {
        console.log(result);
    });
})

app.get("/", function(req, res){
    let token = jwt.sign({email: "ayushi@example.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
})

app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);