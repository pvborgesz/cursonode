const { readFileSync } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; // porta padrão
const url = `http://${hostname}: ${port}`; 

const server = http.createServer((req, res)=>{ // request e response 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Bem Vindo <br> Node.js </h1>');
});

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em ${url}`)
})

const open = (process.platform == "darwin"? 'open': process.platform == "win32"? 'start':'xdg-open');

require('child_process').exec(open + ' '+ url);