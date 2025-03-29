import express from 'express'
import dotenv from "dotenv"
//import mongoose from 'mongoose'
import githubRoutes from "./routes/githubRoutes"
dotenv.config()

const PORT = process.env.PORT

const app = express();

app.use("/api/github", githubRoutes)

app.get("/",(req, res)=>
{
    res.send("API is running")
})

app.listen(PORT, ()=>
console.log(`server is running on port ${PORT}`)
)