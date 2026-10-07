import express from "express";

const PORT = 3000; 

const app = express() // it an instance of express

app.get('/', (req,res)=>{
    return res.send("home")  
})

app.get('/ping', (req,res)=>{
    return res.json({message: "pong"})
})

app.get('/hello', (req, res)=>{
    return res.json({message: "Hello World"})
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on : http://localhost:${PORT}`)
})