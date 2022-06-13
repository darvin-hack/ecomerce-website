const express = require('express');
const mongooose = require("mongoose");
const bodyparser =require('body-parser');
var fs = require('fs');
const { dirname } = require('path');
const { json, get } = require('express/lib/response');
const { fileURLToPath } = require('url');
const app = express();

//const __dirname = dirname(__filename);

app.use(bodyparser.urlencoded({
    extended:true
}));
 app.get("/",function(req,res){
     res.sendFile(__dirname + "/signup.html" );
     res.sendFile(__dirname + "/userd.html");

 });

 app.post("/submit", function(req,res){
     var userid = req.body.userid;
     var name = req.body.name;
     var email = req.body.email;
     var date = req.body.date;
     var gender = req.body.gender;
     var mobileno =req.body.mobileno;
     var username = req.body.username;
     var password = req.body.password;
     var obj ={newuser};
     var key = req.body.name;
     var newuser = {
         "userid"        : userid,
         "name"          : name,
         "email"         : email,
         "date"          : date,
         "gender"        : gender,
         "mobileno"      : mobileno,
         "username"      : username,
         "password"      : password,
     }
     obj[key] = newuser;


     fs.readFile("user.josn","utf8",function(err,data){
         data = json.parse(data);
         data[key] = obj[key];
         console.log(data);
         var updateuser = josn.stringify(data);
         fs.writeFile("user.json",updateuser,function(err)
         {
             req.end(json.stringify(data));
         });
       });
    });
 
 app.post("/particularuser",function(req,res){
     fs.readFile("user.josn","utf8", function(err,data){
         var user = josn.parse(data);
         var user =users[req.body.userid];
         console.log(user);
         res.end(json.stringify(user));
     });
 });
 app.listen(27017,function(){
     console.log("server is running on port 27017")
 });
