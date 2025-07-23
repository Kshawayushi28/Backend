// import express from 'express'
// const app = express()
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
// app.listen(3000)



const express = require('express');
const app = express();

// routes create karna

app.use(function(req, res, next){
    console.log('middleware chala');
    next();
});

app.use(function(req, res, next){
    console.log('middleware chala ek aur baar');
    next();
});

// app.get("route", requestHandler)
app.get("/",function(req, res){
    res.send("champion mera anuj");
});

// app.get("/profile",function(req, res){
//     res.send("champion uska coach");
// });

app.get("/about", function(req, res){
    res.send("about page hai ye")
})

app.get("/profile",function(req, res, next){
    return next(new Error("something went wrong"))
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000);


