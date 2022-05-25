const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", 'ejs');

app.get("/", function(req, res){
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    if (currentDay === 0){
        day = "sunday"
    } else if (currentDay === 1){
        day = "monday"
    } else if (currentDay === 2){
        day = "tuesday"
    } else if (currentDay === 3){
        day = "wednesday"
    } else if (currentDay === 4){
        day = "thursday"
    } else if (currentDay === 5){
        day = "friday"
    } else if (currentDay === 6){
        day = "saturday"
    } else {
        day = "not a weekday"
    }

    // I know this is not best practice, probably it's a better idea to use a switch statement

    res.render("list", {kindOfDay: day});

    // the challenger here now is to make it so the website displays the current day of the week
    // at 14:04 lesson 266.

    });

app.listen(3000, function(){
    console.log("server is running on port 3000...");
});