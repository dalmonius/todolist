const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let newTasks = [];
let workTasks = [];

app.set("view engine", 'ejs');

app.get("/", function(req, res){
    let today = new Date();
    let options = {weekday: 'long', month: 'long', day: 'numeric'};

    res.render("list", {listTitle: today.toLocaleDateString("en-US", options), newListItems: newTasks});
    });

app.post("/", function(req, res){
    let newTask = req.body.newItem;
    newTasks.push(newTask);
    res.redirect("/");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work", newListItems: workTasks});
});

app.post("/work", function(req, res){
    console.log(req.body.newItem);  
    let item = req.body.newItem;
    if (req.body.newItem === "work"){
        workTasks.push(item);
        res.redirect("/work");
    } else {
        newListItems.push(item);
        res.redirect("/");
    }
});

app.listen(3000, function(){
    console.log("server is running on port 3000...");
});