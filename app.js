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
    let item = req.body.newItem;
    if (req.body.button === "Work"){   
        workTasks.push(item);
        res.redirect("/work");
    } else {
        newTasks.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work", newListItems: workTasks});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workTasks.push(item);
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("server is running on port 3000...");
});