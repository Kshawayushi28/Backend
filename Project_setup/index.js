const express = require('express');
const app = express();
const path = require('path');

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));  // iski jagah poora path aayega
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile/:username", function(req, res){
    res.send(`welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", function(req, res){
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function(){
    console.log("its running");
})