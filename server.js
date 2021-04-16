const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req,res)=>{;// request, response
    res.statusCode = 200; // significa que ta tudo certo;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Ola mundo \n meu primeiro script");
})
 
server.listen(port,host,()=>{
    console.log(`Server running at http://${host}:    ${port}`)
})