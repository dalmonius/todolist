const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'ejs');

app.get("/", function(req, res){
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    if (currentDay === 6 || currentDay === 0){
        day = "weekend";
    } else {
        day = "weekday";
        }

    res.render("list", {kindOfDay: day});

    // the challenger here now is to make it so the website displays the current day of the week
    // at 14:04 lesson 266.

    });

app.listen(3000, function(){
    console.log("server is running on port 3000...");
});