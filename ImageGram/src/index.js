import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";
import { s3uploader } from "./config/multerConfig.js";

const PORT = 3000; 

const app = express() // it an instance of express

// Req body ke through clinet info bhej paaye usko liye
app.use(express.json()) // json form mai message aa paaye
app.use(express.text()) // text form mai message aa paaye

app.get('/ping', (req,res)=>{
    return res.json({message: "pong"})
})  

app.post('/posts', s3uploader.single('image'), createPost) 

app.listen(PORT, ()=>{
    console.log(`Server is listening on : http://localhost:${PORT}`)
    connectDB() 
})