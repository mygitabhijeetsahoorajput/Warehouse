var express=require("express");
//create the rest object
var app=express();
//deploy application into server
app.use(express.static(__dirname+"/../BasicNode_Ex"));
//assign the port
app.listen(8080);