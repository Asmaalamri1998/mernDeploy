const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/beltexam",{
useNewUrlParser: true,

useUnifiedTopology: true
})
.then(() => console.log("database established"))
.catch(err => console.log("an erroe occure", err));