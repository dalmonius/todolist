const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(rqe, res){
    res.send("server is running on port 3000...");
});

app.listen(3000, function(){
    console.log("server is running on port 3000...");
});
