const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const Student = require("./student")
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/school").then(()=>
{
    console.log("connected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");

//middleware
const middleware = (req,res,next)=>{
    console.log("i am n middle")
    // if(!req.body.username && !req.body.phone && !req.body.password && !req.body.gender)
    //     {res.redirect("/");}
    // else{next();}

    next();
    
}

app.get("/",(req,res)=>{
res.render("home");
})

app.post("/",(req,res)=>{

     const {username,password,phone,gender} = req.body;
     const obj = {name:username, pass:password,number:phone,sex:gender}
    // console.log(req.body)
    // const std = Student.create(req.body);
    // if(!std){res.redirect("/")}
    // else{res.render("submit",{obj})}

    
    
})



app.get("/about",middleware,(req,res)=>{

    Student.find({}, "username") // Find all students and retrieve only the "username" field
    .then(students => {
      const names = students.map(student => student.username);
      res.render("about", { names });
    })
    .catch(error => {
      console.error(error);
      res.redirect("/");
    });
    
})


app.get("/document",(req,res)=>{
    
      res.render("document", { obj });
    })
    




app.listen(2000,()=>{
    console.log("listening...")
})