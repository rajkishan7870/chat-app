const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic : {type : String, required : true, default : "https://img.lovepik.com/element/40128/7461.png_1200.png" }
    
},
    {
    timestamps : true,
    })


const User = mongoose.model("User", userModel);

module.exports = User;