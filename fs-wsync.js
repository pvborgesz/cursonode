const fs = require("fs");


console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo");

const dados = fs.readFile("file.txt",(err,data)=>{
    if (err) throw err; 
    console.log("Terminei a leitura de  arquivo.txt");
} );  // funcao de callback

console.log("Executando o console apos o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));