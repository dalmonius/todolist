const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let newTasks = ["demo task", "demo task"];

app.set("view engine", 'ejs');

app.get("/", function(req, res){
    let today = new Date();
    let options = {weekday: 'long', month: 'long', day: 'numeric'};

    res.render("list", {kindOfDay: today.toLocaleDateString("en-US", options), newListItems: newTasks});
    });

app.post("/", function(req, res){
    let newTask = req.body.newItem
    newTasks.push(newTask);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running on port 3000...");
});