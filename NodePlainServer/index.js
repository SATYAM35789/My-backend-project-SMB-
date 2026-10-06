const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log("Request received");
    console.log(req); // info about the client
    console.log(res); // info about the server
    
    
    if(req.url=='/'){  // If the request is for the root URL
        res.write("home")
    }
    else if(req.url == '/ping'){
        res.write("pong")
    }
    else {
        //  Sending hello world response
        res.write('Hello World')
    }
    
    res.end() 
})

server.listen(PORT, ()=>{
    // Callback triggered once the server is successfully listening
    console.log("Server is listening on : http://localhost:", PORT)
})