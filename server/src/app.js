const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/conn")

dotenv.config();
connectDB();


const app = express();

const port = process.env.PORT || 5000;


app.get("/chat", (req,res)=>{
    res.send("khuch nahi")
})

app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`)
});