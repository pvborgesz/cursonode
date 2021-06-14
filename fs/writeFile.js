const {writeFile} = require('fs')

writeFile("arquivo.txt", "criando arquivo de texto com write file", err=>{
    if(err) throw err; 
    console.log("arquivo criado com sucesso!");
});