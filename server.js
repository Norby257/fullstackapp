//  setting up dependencies + server
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

//  body parsing code
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//  set up initial route that answers to slash 
app.get("/", function(req, res){
    //  send something back to brower
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/all", function(req, res){
    res.send("some data");
})
//  start server using .listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});