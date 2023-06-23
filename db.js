const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:172.0.0.1:27017/school").then(()=>
{
    console.log("connected")
})