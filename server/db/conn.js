const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/chat-api")
.then(()=>{
    console.log("Connected with DataBase");
})
.catch((err)=>{
    console.log("No Connection with DataBase");
})