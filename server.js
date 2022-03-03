
// incorporate express
const express = require("express");
// refrer to express module
const app = express();
// define what should happen when someone makes a get request to the home route
// request : stocke the request
// response : allows us to send a response
app.get("/",function(req,res){
  console.log(req);
  res.send("<h1>hello</h1>");
});
// create other app.get if the browser try to acess to the route /contact
app.get("/contact",function(req,res){
  console.log(req);
  res.send("<h1>faical@gmail.com</h1>");
});

app.get("/about",function(req,res){
  console.log(req);
  res.send("<h1>faical@gmail.com</h1>");
});



// listen on a specific port any http requests that get sent to our server
app.listen(3000);
