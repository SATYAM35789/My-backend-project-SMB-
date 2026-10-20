import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js"
import { isAuthenticated } from "./middleware/authMiddleware.js";
import ip from 'ip'
import {rateLimit} from 'express-rate-limit'


const PORT = 3000; 

const app = express() // it an instance of express

const limiter = rateLimit({
    windowMs : 0.5 * 60 * 1000 ,// 30 seconds
    max : 5 // limit each IP to 5 requests to windows
})

app.use(limiter) // apply rate limiter to all requests 


// Req body ke through clinet info bhej paaye usko liye
app.use(express.json()) // json form mai message aa paaye
app.use(express.text()) // text form mai message aa paaye
app.use(express.urlencoded())


app.use('/api', apiRouter)

app.get('/ping', (req,res)=>{
    console.log(req.user);
    console.log(req.body);   
    const clientIp = ip.address(); 
    return res.json({message: "pong" + clientIp})
})  


app.listen(PORT, ()=>{
    console.log(`Server is listening on : http://localhost:${PORT}`)
    connectDB() 
})