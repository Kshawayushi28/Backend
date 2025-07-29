const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post")

app.get("/", function(req, res){
    res.send("hey");
})

app.get("/create", async function (req, res){
    let user = await userModel.create({
        username: "ayushi",
        age: 20,
        email: "ayushi@gmail.com"
    });

    res.send(user);
})

app.get("/post/create", async function (req, res){
    let post = await postModel.create({
        postdata: "hello saare log kaise ho",
        user: "6887ba53d7325e4f5e03edb6"
    })

    let user = await userModel.findOne({_id: "6887ba53d7325e4f5e03edb6"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);