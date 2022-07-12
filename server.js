const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");
var generator = require("generate-password");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));


app.get("/" , function(req , res){
    var passwods = generator.generateMultiple(2,{
        length:6,
        uppercase:true,
        lowercase:true,
        numbers:true

    });
    
   res.send(passwods);
});

app.listen(3000 , function(){
    console.log("running")
})