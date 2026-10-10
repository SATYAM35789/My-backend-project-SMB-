import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";

const PORT = 3000; 

const app = express() // it an instance of express


app.get('/ping', (req,res)=>{
    return res.json({message: "pong"})
})


app.post('/posts', createPost)

app.listen(PORT, ()=>{
    console.log(`Server is listening on : http://localhost:${PORT}`)
    connectDB() 
})