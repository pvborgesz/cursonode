//arquivo bloqueante
const fs = require("fs"); // podemos ler arquivos, pastas, apagar,criar

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo");
const dados = fs.readFileSync("arquivo.txt");

console.log("Executando o console apos o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));