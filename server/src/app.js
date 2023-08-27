const express = require("express");
const dotenv = require("dotenv")
require("../db/conn")
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


app.get("/chat", (req,res)=>{
    res.send("khuch nahi")
})

app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`)
});