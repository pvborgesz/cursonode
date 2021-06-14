const fs = require("fs");

fs.readFile("arquivo.txt", (err,data)=>{
    if(err) throw err; 
    console.log(data);
    
    fs.unlink("arquivo.txt",(unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log("arquivo excluido com sucesso.");
    });
});
fs.unlinkSync("arquivo.txt");

