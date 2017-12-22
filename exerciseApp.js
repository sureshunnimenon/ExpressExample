var express = require("express");
var app = express();

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening on port :" + process.env.PORT);
})

app.get("/", (req,res)=> res.send("Hi there, welcome to my assignment"));

app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal;
    console.log(req.params);
    var animalSounds = {
                        "pig": "oink",
                        "dog": "woof",
                        "cow": "moo"
    }
    var output = (animalSounds[animal]===undefined)? "the animal doesnt exist... please check": animal + " makes sound: " + animalSounds[animal];
    console.log(output);
    console.log(animalSounds[animal]);
    
    res.send(output);
})

app.get("/repeat/:param1/:param2", function(req,res){
            res.send((req.params.param1+" ").repeat(Number(req.params.param2)));
        })

app.get("*", (req,res) => res.send("Sorry, page not found.. What are you doing with your life?"))

