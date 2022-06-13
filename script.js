var express = require("express")
var bodyparser =require("body-parser")
var mongoose = require("mongoose") 

const app=express()

app.get("/",(req,res)=>{
	res.send("hello form server")
}).listen(27017);

console.log("listening on port 8080");





const nav = document.getElementByid('navbar');
const close = document.getElementByid('close');


if(bar){ bar.addeventlistener('click',() => {
	nav.classlist.add('active');
})
}
	

if(close){
          bar.addeventlistener('click',()=>{
		 nav.classlist.remove('active');
	})

}