//mongodb
const mongoose = require("mongoose");

const schoolschema = new mongoose.Schema({
    username: {type:String,require:true},
    password: String,
    phone: String,
    gender: String
})
const Student = new mongoose.model("Student",schoolschema)

module.exports = Student

