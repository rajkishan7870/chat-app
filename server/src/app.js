const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/conn")
const useRoutes = require("../routes/userRoutes")
const {notFound, errorHandler} = require("../middleware/errorMiddleware")


dotenv.config();
connectDB();


const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());


app.get("/chat", (req,res)=>{
    res.send("khuch nahi")
})

app.use("/api/user", useRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Connection is setup at ${port}`)
});